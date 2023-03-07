import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

import InfoBox from "../components/InfoBox";

function HomePage() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center md:px-2 lg:px-5">
        <InfoBox
          Icon={SunIcon}
          title='Examples'
          infoTexts={[
            '"Explain something to me"',
            '"What is the difference between a cat and a dog?"',
            '"What is the color of the sun?"',
          ]}
        />
        <InfoBox
          Icon={BoltIcon}
          title='Capabilities'
          infoTexts={[
            'Change the ChatGPT Model to use',
            'Messages are stored in Firebase Firestore',
            'Hot Toast notifications when ChatGPT is thinking',
          ]}
        />
        <InfoBox
          Icon={ExclamationTriangleIcon}
          title='Limitations'
          infoTexts={[
            'May occasionally generate incorrect information',
            'May occasionally produce harmful instructions or biased content',
            'Limited knowledge of world and events after 2021',
          ]}
        />
      </div>
    </div>
  );
}

export default HomePage;
