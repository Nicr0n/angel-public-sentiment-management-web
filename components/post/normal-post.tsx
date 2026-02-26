interface NormalPostProps {
  title: string;
  source: string;
  time: string;
  content: string;
}

export function NormalPost({ title, source, time, content }: NormalPostProps) {
  return (
    <div className="space-y-1.5">
      <h3 className="font-semibold text-xl leading-snug">{title}</h3>
      <p className="text-xs text-muted-foreground">
        {source} | {time}
      </p>
      <p className="text-sm text-foreground leading-relaxed">{content}</p>
    </div>
  );
}
