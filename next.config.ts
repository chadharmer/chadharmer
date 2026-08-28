import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The case study used to live at /lesson-plan, under the product's old name.
     That URL is on resumes and job applications already, so the rename keeps a
     permanent redirect rather than breaking links someone else is holding. */
  async redirects() {
    return [{ source: "/lesson-plan", destination: "/verateach", permanent: true }];
  },
};

export default nextConfig;
