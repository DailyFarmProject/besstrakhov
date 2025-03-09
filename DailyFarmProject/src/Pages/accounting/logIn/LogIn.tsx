import LogInForm from "../../../Widjests/logInForm/LogInForm.tsx";

interface Props {
    setPage: (page: string) => void;
}

const LogIn = ({setPage}:Props) => {
    return (
        <div>
            <div className={"m-auto w-[80%] mt-[20vh]"}>
            <LogInForm/>
            </div>
            <p className={"text-center mt-sighInForm"}>
            if you don't sing in,you may{'\u00A0'}
            <span className={"text-blue-400 cursor-pointer"}
                  onClick={() => {
                      setPage("signIn")
                  }}
            >Sign in </span>
            </p>
        </div>
    );
};

export default LogIn;