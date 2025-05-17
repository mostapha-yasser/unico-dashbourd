import { useFormStatus } from "react-dom";
import { Button } from "../ui/Button";
function SubmitButton({title}:{title:string})

{
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col  md:mt-3 w-full items-center">
      <Button
        isDisable={pending}
        type="submit"
        bgColor="#fffdfb"
        
        className={` ${ pending?"opacity-70":""}`}
      >
        {pending ? "loading.." : title}
      </Button>
    </div>
  );
}

export default SubmitButton;
