import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import logo from "../public/assets/svg/light-fg.svg";

export default function Page() {
  return (
    <section>
      <div>
        <Image
          src={logo}
          alt="Ariel Saldana"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ariel Saldana
      </h1>
      <p className="mb-4">
        {`I'm a full-stack software engineer based out of NYC, bringing over a decade of experience from traditional finance to the forefront of AI and Web3 technologies. My extensive background empowers my approach to innovative software solutions, seamlessly integrating complex systems from conventional financial frameworks into the cutting-edge spaces of AI and blockchain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
