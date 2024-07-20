//Components
import PlayGround from "@/components/UI/PlayGround";
//YUM UI
import { BaseButton } from "@/yum_ui_kit/BaseButton.style";
import { GradientButton } from "@/yum_ui_kit/GradientButton.style";
import { OutlineButton } from "@/yum_ui_kit/OutlineButton.style";
import { BaseInput } from "@/yum_ui_kit/BaseInput.style";
import { BaseTextArea } from "@/yum_ui_kit/BaseTextArea.style";
import { FileInput } from "@/yum_ui_kit/FileInput.style";
import { BaseTable } from "@/yum_ui_kit/BaseTable.style";
import { DarkTable } from "@/yum_ui_kit/DarkTable.style";
import { RoundTable } from "@/yum_ui_kit/RoundTable.style";
import { BorderTable } from "@/yum_ui_kit/BorderTable.style";

interface renderPlaygroundProps {
  menuState: string;
  colorHex: string;
  secondColorHex: string;
}

export const renderPlayground = ({
  menuState,
  colorHex,
  secondColorHex,
}: renderPlaygroundProps) => {
  switch (menuState) {
    case "button":
      return (
        <>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BaseButton colorhex={colorHex} subcolorhex={secondColorHex}>
              베이스버튼
            </BaseButton>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <GradientButton colorhex={colorHex} subcolorhex={secondColorHex}>
              그라데이션버튼
            </GradientButton>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <OutlineButton colorhex={colorHex} subcolorhex={secondColorHex}>
              아웃라인 버튼
            </OutlineButton>
          </PlayGround>
        </>
      );
    case "inform":
      return (
        <>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BaseInput colorhex={colorHex} placeholder="입력해주세요." />
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BaseTextArea colorhex={colorHex} placeholder="입력해주세요." />
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <FileInput colorhex={colorHex} placeholder="입력해주세요." />
          </PlayGround>
        </>
      );
    case "table":
      return (
        <>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BaseTable colorhex={colorHex}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dames</td>
                  <td>light</td>
                  <td>YUM08271</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Foria</td>
                  <td>marvin</td>
                  <td>YUM08272</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Elisa</td>
                  <td>gallian</td>
                  <td>YUM08273</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Larry</td>
                  <td>treasure</td>
                  <td>YUM08274</td>
                </tr>
              </tbody>
            </BaseTable>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <DarkTable colorhex={colorHex} subcolorhex={secondColorHex} />
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <RoundTable colorhex={colorHex} />
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BorderTable colorhex={colorHex} />
          </PlayGround>
        </>
      );
  }
};
