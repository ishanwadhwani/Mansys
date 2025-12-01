import React, { useState } from "react";
import {
  Card,
  Stack,
  Text,
  Button,
  Dialog,
  TextArea,
  TextInput,
  Label,
  Box,
  Flex,
  useToast,
} from "@sanity/ui";
import { useClient, useFormValue } from "sanity";

// Need to define props type for custom input components
type EmailManagerProps = {
  documentId: string;
  value?: string; // We don't really store value here, but props require it
  // The onChange prop is passed by Sanity form builder but we might not use it directly if we don't store value
  onChange?: (patch: Record<string, unknown>) => void;
};

export const EmailManager = () => {
  // Access the current document values
  // In Sanity V3 custom components, props usually include 'documentId' or we can get it from context
  // If props.documentId is undefined, we might need to look at props.value or context, but typically for document actions it's different.
  // For a field component, we have access to other fields via useFormValue.

//   const documentId = props.documentId; // This might be available depending on where it's used (Input vs Action)
  // If used as an Input Component, documentId might not be directly in props in all versions.
  // A reliable way to get the ID in a field component is slightly complex, often passed down or retrieved from context.
  // However, for this specific "Admin Action" pattern inside the form, let's rely on what's available.

  // We use useFormValue to get live data from the form
  const id = useFormValue(["_id"]) as string;
  const firstName = useFormValue(["firstName"]) as string;
  const lastName = useFormValue(["lastName"]) as string;
  const email = useFormValue(["email"]) as string;
  const occupation = useFormValue(["occupation"]) as string;

  const safeId = id ? id.replace("drafts.", "") : "";

  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState<"qualify" | "reject" | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  // Editable Fields
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const client = useClient({ apiVersion: "2024-01-01" });
  const toast = useToast();

  const handleOpen = async (type: "qualify" | "reject") => {
    if (!safeId) {
      toast.push({
        status: "error",
        title: "Cannot find document ID. Is this a new document?",
      });
      return;
    }

    setLoading(true);
    setActionType(type);

    try {
      // 1. Fetch the template
      const slug =
        type === "qualify" ? "qualified-candidate" : "unqualified-candidate";
      const template = await client.fetch(
        `*[_type == "emailTemplate" && slug.current == $slug][0]`,
        { slug }
      );

      if (!template) {
        toast.push({
          status: "error",
          title: "Template not found. Check Email Templates.",
        });
        setLoading(false);
        return;
      }

      // 2. Pre-fill and Replace Variables
      let processedBody = template.body || "";
      processedBody = processedBody
        .replace(/{{firstName}}/g, firstName || "")
        .replace(/{{lastName}}/g, lastName || "")
        .replace(/{{occupation}}/g, occupation || "");

      setSubject(template.subject || "");
      setBody(processedBody);
      setIsOpen(true);
    } catch (err) {
      console.error(err);
      toast.push({ status: "error", title: "Failed to load template" });
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async () => {
    if (!actionType || !safeId) return;
    setLoading(true);

    try {
      // Call your Next.js API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateId: safeId,
          type: actionType,
          customSubject: subject,
          customBody: body,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.push({ status: "success", title: "Email Sent Successfully" });
        setIsOpen(false);
      } else {
        toast.push({
          status: "error",
          title: `Error: ${result.message || result.error}`,
        });
      }
    } catch (err) {
      console.error(err);
      toast.push({ status: "error", title: "Connection Failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card padding={4} radius={2} shadow={1} tone="transparent">
      <Stack space={3}>
        <Text size={1} weight="semibold">
          Admin Email Actions
        </Text>
        <Text size={1} muted>
          Select an action to review and edit the email before sending.
        </Text>

        <Flex gap={3} marginTop={2}>
          <Button
            text="Qualify & Email"
            tone="positive"
            mode="ghost"
            onClick={() => handleOpen("qualify")}
            disabled={loading || !id}
          />
          <Button
            text="Reject & Email"
            tone="critical"
            mode="ghost"
            onClick={() => handleOpen("reject")}
            disabled={loading || !id}
          />
        </Flex>
      </Stack>

      {/* The Modal Dialog */}
      {isOpen && (
        <Dialog
          header={`Send ${actionType === "qualify" ? "Qualification" : "Rejection"} Email`}
          id="email-dialog"
          onClose={() => setIsOpen(false)}
          width={2}
          footer={
            <Box padding={3}>
              <Flex justify="flex-end" gap={3}>
                <Button
                  text="Cancel"
                  mode="ghost"
                  onClick={() => setIsOpen(false)}
                />
                <Button
                  text={loading ? "Sending..." : "Send Email"}
                  tone={actionType === "qualify" ? "positive" : "critical"}
                  onClick={handleSend}
                  disabled={loading}
                />
              </Flex>
            </Box>
          }
        >
          <Box padding={4}>
            <Stack space={4}>
              <Box>
                <Label>To</Label>
                <Text size={2} style={{ marginTop: "0.5rem" }}>
                  {email} ({firstName} {lastName})
                </Text>
              </Box>
              <Box>
                <Label>Subject</Label>
                <TextInput
                  value={subject}
                  onChange={(e) => setSubject(e.currentTarget.value)}
                  style={{ marginTop: "0.5rem" }}
                />
              </Box>
              <Box>
                <Label>Message Body</Label>
                <TextArea
                  value={body}
                  onChange={(e) => setBody(e.currentTarget.value)}
                  rows={10}
                  style={{ marginTop: "0.5rem" }}
                />
              </Box>
            </Stack>
          </Box>
        </Dialog>
      )}
    </Card>
  );
};
