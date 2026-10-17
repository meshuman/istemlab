import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Login | I.STEM Lab",
  description: "Sign in to your I.STEM Lab client account.",
  robots: { index: false, follow: false },
};

export default function Login() {
  return (
    <>
      <PageHero title="Login" />
      <section className="py-16">
        <form className="container-x max-w-md space-y-4">
          <label className="block text-sm font-medium">
            Email
            <input type="email" className="mt-1 w-full rounded-none border border-hair px-4 py-2.5" />
          </label>
          <label className="block text-sm font-medium">
            Password
            <input type="password" className="mt-1 w-full rounded-none border border-hair px-4 py-2.5" />
          </label>
          <button type="button" className="w-full btn btn-solid">
            Sign in
          </button>
        </form>
      </section>
    </>
  );
}
