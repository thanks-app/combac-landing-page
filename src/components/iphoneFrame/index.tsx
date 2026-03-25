interface Props {
  src: string;
}

function IphoneFrame({ src }: Props) {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={src}
          alt="screenshot"
          className="rounded-[3rem] h-full w-full object-cover"
        />
      </div>
      <img
        src="/misc/iphone-frame.webp"
        alt="iphone-frame"
        className="relative z-10 h-full"
      />
    </div>
  );
}

export default IphoneFrame;
