import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Case studies moved under /work. The old URLs are on resumes and job
     applications already, so each keeps a permanent redirect rather than
     breaking a link someone else is holding. /lesson-plan is VeraTeach's old
     name; it points straight at the final URL rather than chaining redirects. */
  async redirects() {
    return [
      { source: "/lesson-plan", destination: "/work/verateach", permanent: true },
      { source: "/verateach", destination: "/work/verateach", permanent: true },
      { source: "/ryger", destination: "/work/ryger", permanent: true },
    ];
  },
};

export default nextConfig;
