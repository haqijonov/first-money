export default function AboutVideo() {
  return (
    <div className="base-container mb-10">
      <iframe
        className="m-auto w-full rounded-xl  sm:h-[295px] sm:max-w-[620px] md:h-[395px] md:max-w-[720px] lg:h-[500px] lg:max-w-[1000px] lg:rounded-[42px] xl:h-[636px] xl:max-w-[1154px]"
        width="354"
        height="195"
        src="https://www.youtube.com/embed/Zu00I_pfFYI?si=MaEZSVTwreJxYWvw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}