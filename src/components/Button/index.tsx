import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: Props) => {
  const { className } = props;

  return <button {...props} className={classNames(className, "px-4 py-2 min-w-[80px] rounded-md bg-teal-500 text-slate-800 hover:text-slate-900")} />;
};

export default Button;
