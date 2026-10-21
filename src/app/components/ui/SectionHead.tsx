import cn from "@/app/utils/className";

type SectionHeadProps = {
  id: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
  className?: string;
};

export default function SectionHead({
  id,
  title,
  lead,
  tone = "light",
  className,
}: SectionHeadProps) {
  return (
    <div className={className}>
      <h2
        id={`${id}-heading`}
        tabIndex={-1}
        className="scroll-mt-22 font-head text-[clamp(2rem,4.5vw,3rem)] leading-[1.02] font-extrabold tracking-[-0.03em]"
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 max-w-[60ch]",
            tone === "dark" ? "text-mute" : "text-steel",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
