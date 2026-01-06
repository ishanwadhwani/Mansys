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

type EmailManagerProps = {
  documentId: string;
  value?: string;
  onChange?: (patch: Record<string, unknown>) => void;
};

export const EmailManager = () => {
  const id = useFormValue(["_id"]) as string;
  const firstName = useFormValue(["firstName"]) as string;
  const lastName = useFormValue(["lastName"]) as string;
  const email = useFormValue(["email"]) as string;
  const occupation = useFormValue(["occupation"]) as string;
  const occupationOther = useFormValue(["occupationOther"]) as string;

  const safeId = id ? id.replace("drafts.", "") : "";

  const [isOpen, setIsOpen] = useState(false);
  const [actionType, setActionType] = useState<
    "qualify" | "reject" | "review" | null
  >(null);
  const [loading, setLoading] = useState(false);

  // Editable Fields
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const client = useClient({ apiVersion: "2024-01-01" });
  const toast = useToast();

  const handleOpen = async (type: "qualify" | "reject" | "review") => {
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
      let slug = "";
      if (type === "qualify") slug = "qualified-candidate";
      else if (type === "reject") slug = "unqualified-candidate";
      else if (type === "review") slug = "manual-review";

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

      let processedBody = template.body || "";
      processedBody = processedBody
        .replace(/{{firstName}}/g, firstName || "")
        .replace(/{{lastName}}/g, lastName || "")
        .replace(/{{occupation}}/g, occupation || "")
        .replace(/{{occupationOther}}/g, occupationOther || "");

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

  const getActionDetails = (): { tone: "positive" | "critical" | "primary" | "default"; label: string } => {
    switch (actionType) {
      case "qualify":
        return { tone: "positive", label: "Qualification" };
      case "reject":
        return { tone: "critical", label: "Rejection" };
      case "review":
        return { tone: "primary", label: "Manual Review" };
      default:
        return { tone: "default", label: "Email" };
    }
  };

  const { tone, label } = getActionDetails();

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
          <Button
            text="Review & Email (Other)"
            tone="primary"
            mode="ghost"
            onClick={() => handleOpen("review")}
            disabled={loading || !id}
          />
        </Flex>
      </Stack>

      {/* The Modal Dialog */}
      {isOpen && (
        <Dialog
          header={`Send ${label} Email`}
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
                  tone={tone} 
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
                <Label style={{ marginBottom: "0.5rem" }}>To</Label>
                <Text size={2} style={{ marginTop: "0.5rem" }}>
                  {email} ({firstName} {lastName})
                </Text>
              </Box>
              <Box>
                <Label style={{ marginBottom: "0.5rem" }}>Subject</Label>
                <TextInput
                  value={subject}
                  onChange={(e) => setSubject(e.currentTarget.value)}
                  style={{ marginTop: "0.5rem" }}
                />
              </Box>
              <Box>
                <Label style={{ marginBottom: "0.5rem" }}>Message Body</Label>
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
