import { Image } from "antd";

export default function Header() {
  return (
    <>
      <Image.PreviewGroup>
        <Image width={200} src="/profilepic.jpg" />
        <Image width={200} src="/vercel.svg" />
      </Image.PreviewGroup>
    </>
  );
}
