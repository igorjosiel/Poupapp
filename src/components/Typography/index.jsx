import styles from "./typography.module.css";

const TAGS = {
  h1: "h1",
  h2: "h2",
  body: "p",
};

const Typography = ({ variant, children }) => {
  const Component = TAGS[variant] || TAGS.body;
  const variantClass = styles[variant] || styles.p;

  return <Component className={variantClass}>{children}</Component>;
};

export default Typography;
