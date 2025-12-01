import { useDocumentOperation } from "sanity";

interface SendEmailActionProps {
  id: string;
  type: string;
  draft?: { qualified?: boolean; firstName?: string; _id: string } | null;
  published?: { qualified?: boolean; firstName?: string; _id: string } | null;
}

export function SendEmailAction(props: SendEmailActionProps) {
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const { draft, published } = props;

  const doc = draft || published;

  if (!doc || props.type !== "candidateApplication") {
    return null;
  }

  const isQualified = doc.qualified === true;
  const label = isQualified
    ? "📩 Send Qualification Email"
    : "⛔ Send Custom Email";
  const actionType = isQualified ? "qualify" : "custom";

  const onHandle = async () => {
    alert(`Sending ${actionType} email to ${doc.firstName}...`);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateId: doc._id,
          type: actionType,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Email sent successfully!");
      } else {
        alert(`❌ Error: ${result.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to connect to server.");
    }
  };

  return {
    label: label,
    onHandle: onHandle,
  };
}
