function Hello(){
    let name = "Shivam";
    let fullName = () => {
       return "Shivam Thakur"
    }
    return <h3>
        Hello this is the future speaking. I am {fullName()}.
    </h3>

}
export default Hello;