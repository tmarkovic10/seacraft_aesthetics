import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
              @import 'styles/utils/_rem-calc.scss';
              @import 'styles/settings/variables';
              @import 'styles/mixins/breakpoints';
          `,
  },
};

export default withNextIntl(nextConfig);
