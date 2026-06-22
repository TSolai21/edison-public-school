interface WaveDividerProps {
  flip?: boolean;
  fillFrom?: string;
  fillTo?: string;
  className?: string;
}

export default function WaveDivider({
  flip = false,
  fillFrom = "#f5f0e8",
  fillTo = "#1a1f16",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] sm:h-[80px] md:h-[100px]"
      >
        <path
          d="M0,40 C180,100 360,0 540,50 C720,100 900,10 1080,60 C1260,110 1350,30 1440,50 L1440,120 L0,120 Z"
          fill={fillTo}
        />
        <path
          d="M0,0 L1440,0 L1440,50 C1350,30 1260,110 1080,60 C900,10 720,100 540,50 C360,0 180,100 0,40 Z"
          fill={fillFrom}
        />
      </svg>
    </div>
  );
}

export function GentleWave({
  flip = false,
  fillFrom = "#f5f0e8",
  fillTo = "#1a1f16",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[40px] sm:h-[60px]"
      >
        <path
          d="M0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,80 L0,80 Z"
          fill={fillTo}
        />
        <path
          d="M0,0 L1440,0 L1440,40 Q1080,0 720,40 Q360,80 0,40 Z"
          fill={fillFrom}
        />
      </svg>
    </div>
  );
}

export function OrganicWave({
  flip = false,
  fillFrom = "#f5f0e8",
  fillTo = "#1a1f16",
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-[50px] sm:h-[70px]"
      >
        <path
          d="M0,30 C240,70 480,10 720,50 C960,90 1200,20 1440,40 L1440,100 L0,100 Z"
          fill={fillTo}
          opacity="0.5"
        />
        <path
          d="M0,50 C300,10 600,80 900,30 C1100,5 1300,60 1440,30 L1440,100 L0,100 Z"
          fill={fillTo}
        />
      </svg>
    </div>
  );
}

export function ScallopDivider({
  fill = "#d4c5a9",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 24"
        preserveAspectRatio="none"
        className="w-full h-4 sm:h-5"
      >
        <path
          d="M0,12 Q180,0 360,12 Q540,24 720,12 Q900,0 1080,12 Q1260,24 1440,12 L1440,24 L0,24 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function DotDivider({
  fill = "#d4c5a9",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-2 py-4 ${className}`}
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-1 h-1 rounded-full"
          style={{ backgroundColor: fill }}
        />
      ))}
    </div>
  );
}
