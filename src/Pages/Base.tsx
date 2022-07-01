import { Helmet } from "react-helmet";
import { Fragment } from "react";

type Props = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  children: React.ReactNode;
};

const Base = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  children,
}: Props) => {
  return (
    <Fragment>
      {/* SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(" ,")} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      {/* SEO */}

      {/* Page Component */}
      {children}
      {/* Page Component */}
    </Fragment>
  );
};

export default Base;
