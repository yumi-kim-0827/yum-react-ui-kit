import React from "react";
import Head from "next/head";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import Layout from "@/components/Layout/Layout";
import Grid from "@/components/Layout/Grid";
import SubjectTitle from "@/components/UI/SubjectTitle";
import Card from "@/components/UI/Card";
import CardHead from "@/components/UI/CardHead";
import PlayGround from "@/components/UI/PlayGround";
import { BaseButton } from "@/yum_ui_kit/BaseButton.style";
import { GradientButton } from "@/yum_ui_kit/GradientButton.style";
import { OutlineButton } from "@/yum_ui_kit/OutlineButton.style";
import { BaseInput } from "@/yum_ui_kit/BaseInput.style";
import { BaseTextArea } from "@/yum_ui_kit/BaseTextArea.style";
import { FileInput } from "@/yum_ui_kit/FileInput.style";

const Showcase = () => {
  const [color, setColor] = useColor("#561ecb");
  const [secondColor, setSecondColor] = useColor("#28aefa");
  console.log(color);
  return (
    <>
      <Head>
        <title>Yum Ui Components Kit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Grid column="repeat(2, 1fr)">
          <Card>
            <CardHead>1. 메인칼라를 고르세요</CardHead>
            <ColorPicker color={color} onChange={setColor} />
          </Card>
          <Card>
            <CardHead>2. 서브칼라를 고르세요</CardHead>
            <ColorPicker color={secondColor} onChange={setSecondColor} />
          </Card>
        </Grid>
        <SubjectTitle
          title={"버튼"}
          text={"버튼 종류 : BaseButton, GradientButton"}
        />
        <Grid column="repeat(2, 1fr)">
          <PlayGround colorHex={color.hex} subColorHex={color.hex}>
            <BaseButton
              r={color.rgb.r}
              g={color.rgb.g}
              b={color.rgb.b}
              a={color.rgb.a}
            >
              베이스버튼
            </BaseButton>
          </PlayGround>
          <PlayGround colorHex={color.hex} subColorHex={color.hex}>
            <GradientButton
              r={color.rgb.r}
              g={color.rgb.g}
              b={color.rgb.b}
              a={color.rgb.a}
              rSub={secondColor.rgb.r}
              gSub={secondColor.rgb.g}
              bSub={secondColor.rgb.b}
              aSub={secondColor.rgb.a}
            >
              그라데이션버튼
            </GradientButton>
          </PlayGround>
          <PlayGround colorHex={color.hex} subColorHex={color.hex}>
            <OutlineButton
              r={color.rgb.r}
              g={color.rgb.g}
              b={color.rgb.b}
              a={color.rgb.a}
              rSub={secondColor.rgb.r}
              gSub={secondColor.rgb.g}
              bSub={secondColor.rgb.b}
              aSub={secondColor.rgb.a}
            >
              아웃라인 버튼
            </OutlineButton>
          </PlayGround>
        </Grid>
        <SubjectTitle
          title="입력"
          text="입력폼 종류 : BaseButton, GradientButton"
        />
        <Grid column={"repeat(2, 1fr)"} place="start">
          <PlayGround colorHex={color.hex} subColorHex={color.hex}>
            <BaseInput
              r={color.rgb.r}
              g={color.rgb.g}
              b={color.rgb.b}
              a={color.rgb.a}
              placeholder="입력해주세요."
            />
          </PlayGround>
          <PlayGround colorHex={color.hex} subColorHex={color.hex}>
            <BaseTextArea
              r={color.rgb.r}
              g={color.rgb.g}
              b={color.rgb.b}
              a={color.rgb.a}
              placeholder="입력해주세요."
            />
          </PlayGround>
        </Grid>
        <Grid column={"repeat(2, 1fr)"} place="start">
          <PlayGround colorHex={color.hex} subColorHex={color.hex}>
            <FileInput
              r={color.rgb.r}
              g={color.rgb.g}
              b={color.rgb.b}
              a={color.rgb.a}
              placeholder="입력해주세요."
            />
          </PlayGround>
        </Grid>
      </Layout>
    </>
  );
};

export default Showcase;
