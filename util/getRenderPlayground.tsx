//Components
import PlayGround from "@/components/UI/PlayGround";
//YUM UI
import { BaseBadge } from "@/yum_ui_kit/BaseBadge.style";
import { DarkBadge } from "@/yum_ui_kit/DarkBadge.style";
import { GradientBadge } from "@/yum_ui_kit/GradientBadge.style";
import { RoundBadge } from "@/yum_ui_kit/RoundBadge.style";
import { BottomBorderBadge } from "@/yum_ui_kit/BottomBorderBadge.style";
import { BaseButton } from "@/yum_ui_kit/BaseButton.style";
import { GradientButton } from "@/yum_ui_kit/GradientButton.style";
import { OutlineButton } from "@/yum_ui_kit/OutlineButton.style";
import { BaseInput } from "@/yum_ui_kit/BaseInput.style";
import { BaseTextArea } from "@/yum_ui_kit/BaseTextArea.style";
import { FileInput } from "@/yum_ui_kit/FileInput.style";
import { BaseAlert } from "@/yum_ui_kit/BaseAlert.style";
import { BaseTable } from "@/yum_ui_kit/BaseTable.style";
import { DarkTable } from "@/yum_ui_kit/DarkTable.style";
import { RoundTable } from "@/yum_ui_kit/RoundTable.style";
import { BorderTable } from "@/yum_ui_kit/BorderTable.style";
import { BorderAlert } from "@/yum_ui_kit/BorderAlert.style";
import { BaseCard } from "@/yum_ui_kit/BaseCard.style";
import { GradientCard } from "@/yum_ui_kit/GradientCard.style";
//Utill
import { exampleTable } from "@/util/getTableCode";

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
    case "badge":
      return (
        <>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BaseBadge colorhex={colorHex}>기본 라인 뱃지</BaseBadge>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <DarkBadge colorhex={colorHex}>다크 뱃지</DarkBadge>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <GradientBadge colorhex={colorHex} subcolorhex={secondColorHex}>
              그라데이션 뱃지
            </GradientBadge>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <RoundBadge colorhex={colorHex}>라운드 뱃지</RoundBadge>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BottomBorderBadge colorhex={colorHex}>보더 뱃지</BottomBorderBadge>
          </PlayGround>
        </>
      );
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
    case "alert":
      return (
        <>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BaseAlert colorhex={colorHex}>비밀번호를 변경해주세요!</BaseAlert>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BorderAlert colorhex={colorHex}>
              비밀번호를 변경해주세요!
            </BorderAlert>
          </PlayGround>
        </>
      );
    case "table":
      return (
        <>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BaseTable colorhex={colorHex}>{exampleTable()}</BaseTable>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <DarkTable colorhex={colorHex} subcolorhex={secondColorHex}>
              {exampleTable()}
            </DarkTable>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <RoundTable colorhex={colorHex}>{exampleTable()}</RoundTable>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BorderTable colorhex={colorHex}>{exampleTable()}</BorderTable>
          </PlayGround>
        </>
      );
    case "card":
      return (
        <>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <BaseCard colorhex={colorHex}>
              <h2>카드 제목</h2>
              <p>
                오늘은 햇살이 반짝이는 예쁜 날이었다. 아침 일찍 일어나 창문을
                열자, 귀여운 참새 한 마리가 내 창가에 앉아 나를 반기듯
                짹짹거렸다. 작은 눈동자를 반짝이며 나를 바라보는 모습이 어찌나
                사랑스러운지, 잠시 넋을 놓고 바라봤다. 참새는 잠시 후
                날아갔지만, 그 작은 친구 덕분에 하루가 더 환하게 시작된 것
                같았다. 오늘은 모든 게 잘 풀릴 것 같은 기분이 들었다. 간단한
                아침을 먹고, 햇살을 듬뿍 받으며 산책을 다녀와야겠다.
              </p>
            </BaseCard>
          </PlayGround>
          <PlayGround colorhex={colorHex} subcolorhex={secondColorHex}>
            <GradientCard colorhex={colorHex} subcolorhex={secondColorHex}>
              <h2>카드 제목</h2>
              <p>
                오늘은 햇살이 반짝이는 예쁜 날이었다. 아침 일찍 일어나 창문을
                열자, 귀여운 참새 한 마리가 내 창가에 앉아 나를 반기듯
                짹짹거렸다. 작은 눈동자를 반짝이며 나를 바라보는 모습이 어찌나
                사랑스러운지, 잠시 넋을 놓고 바라봤다. 참새는 잠시 후
                날아갔지만, 그 작은 친구 덕분에 하루가 더 환하게 시작된 것
                같았다. 오늘은 모든 게 잘 풀릴 것 같은 기분이 들었다. 간단한
                아침을 먹고, 햇살을 듬뿍 받으며 산책을 다녀와야겠다.
              </p>
            </GradientCard>
          </PlayGround>
        </>
      );
  }
};
