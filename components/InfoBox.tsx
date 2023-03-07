import React from "react";

type Props = {
  Icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
    titleId?: string | undefined;
}>;
  title: string;
  infoTexts: string[];
};

function InfoBox({ Icon, title, infoTexts }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center mb-5 cursor-pointer group">
        <Icon className="h-8 w-8 group-hover:animate-bounce" />
        <h2>{title}</h2>
      </div>

      <div className="space-y-2">
        {infoTexts.map(text => (
          <p key={text} className="infoText">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default InfoBox;
