import {useAppSelector} from "../../../app/hooks.ts";

const Confirmation = () => {
    const regDada = useAppSelector(state => state.regData)
    return (
        <div className={"inputForm text-center"}>
            <h2 className={"text-2xl"}>Your company account  <pre className={"italic"}>{regDada.company}</pre>  has been successfully registered.</h2>
            <h3>You need to verify your email <pre className={"italic"}>{regDada.email}</pre>.</h3>
            <h3>Then you will be able to log into your account.</h3>
        </div>
    );
}
    ;

    export default Confirmation;