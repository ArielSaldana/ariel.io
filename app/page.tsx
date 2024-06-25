import { BlogPosts } from "app/components/posts";
import Logo from "@/app/assets/logo-white.svg";

export default function Page() {
  return (
    <section>
      <div className="max-w-36 mb-6">
        <Logo />
      </div>
      <p className="mb-4">
        {`I'm a full-stack software engineer based out of NYC, bringing over a decade of experience from traditional finance to the forefront of AI and Web3 technologies. My extensive background empowers my approach to innovative software solutions, seamlessly integrating complex systems from conventional financial frameworks into the cutting-edge spaces of AI and blockchain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
