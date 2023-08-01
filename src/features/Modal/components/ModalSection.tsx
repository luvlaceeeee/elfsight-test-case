interface ModalSectionProps {
  label: string;
  content: string;
  href?: string;
}
export function ModalSection({ content, href, label }: ModalSectionProps) {
  return (
    <div>
      <span className="text-sm font-semibold text-zinc-500">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          className="block text-lg font-bold hover:text-orange-400"
        >
          {content}
        </a>
      ) : (
        <p className="text-lg font-bold">{content}</p>
      )}
    </div>
  );
}
