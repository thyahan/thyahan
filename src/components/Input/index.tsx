import classNames from "classnames";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const cls = `
  min-w-[200px] h-10 px-4 py-2 rounded-md 
  bg-slate-500 text-slate-900 border border-transparent
  
  focus:outline-none focus:border-teal-500
`;

const Input = (props: Props) => {
  const { className } = props;

  return <input {...props} className={classNames(className, cls)} />;
};

export default Input;
