import { IconType } from "react-icons";
import {
  PiSealCheckBold,
  PiShieldCheckBold,
  PiSparkleBold,
  PiUsersThreeBold,
  PiChartLineUpBold,
  PiCertificateBold,
} from "react-icons/pi";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <h3 className="text-4xl md:text-5xl font-bold text-navy mb-2">{value}</h3> 
      <p className="text-base text-muted uppercase tracking-wider">{label}</p>
  </div>
);

const IconBox = ({
  Icon,
  title,
  desc,
}: {
  Icon: IconType;
  title: string;
  desc: string;
}) => (
  <div className="flex flex-col items-center text-center p-8 bg-[var(--color-accent)] rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
    <div className="w-16 md:w-24 h-16 md:h-24 flex items-center justify-center mb-2">
      <Icon className="w-16 md:w-24 h-16 md:h-24 text-white" />
    </div>
    <div className="w-full bg-white/90 p-4 rounded-lg">
      <h4 className="text-xl font-semibold text-[var(--color-navy)] mb-2">
        {title}
      </h4>
      <p className="text-base text-[var(--color-navy)]/80">{desc}</p>
    </div>
  </div>
);

export default function Features() {
  return (
    <section className="py-20 bg-[var(--muted)]/5">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <StatItem value="10+" label="Years Experience" />
          <StatItem value="500+" label="Clients Supported" />
          <StatItem value="99%" label="Success Rate" />
          <StatItem value="MARA" label="Registered Agents" />     
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[--color-navy] mb-4">
            A Partnership You Can Trust
          </h2>
          <p className="text-lg text-[--muted] mb-12">
            We build long-term relationships by focusing on three core pillars:
            specialisation, quality vetting, and total compliance.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <IconBox
            Icon={PiSparkleBold}
            title="Specialists"
            desc="We specialise in the trades that drive Australia: Construction, Hospitality, Automotive, and Aged & Disability Care."
          />
          <IconBox
            Icon={PiSealCheckBold}
            title="Vetted"
            desc="We support candidates with CVs and interview coaching, ensuring employers meet people who are ready to work."
          />
          <IconBox
            Icon={PiShieldCheckBold}
            title="Compliant"
            desc="We are not migration agents. We partner with MARN-registered agents to handle all visa advice, ensuring a compliant process."
          />
        </div>
      </div>
    </section>
  );
}
