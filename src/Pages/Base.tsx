import { Helmet } from "react-helmet";
import { Fragment } from "react";

type Props = {
  title: string;
  description: string;
  keywords: string[];
  children: React.ReactNode;
};

const Base = ({ title, description, keywords, children }: Props) => {
  return (
    <Fragment>
      {/* SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(" ,")} />
      </Helmet>
      {/* SEO */}

      {/* Page Component */}
      {children}
      {/* Page Component */}
    </Fragment>
  );
};

export default Base;
