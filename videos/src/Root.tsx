import { Composition, Folder } from "remotion";
import { BrandIntro } from "./compositions/BrandIntro";
import { DataReel } from "./compositions/DataReel";

export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="ModulorIA">
      <Composition
        id="BrandIntro"
        component={BrandIntro}
        durationInFrames={390}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DataReel"
        component={DataReel}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
      />
    </Folder>
  );
};
