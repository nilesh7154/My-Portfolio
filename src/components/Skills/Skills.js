import "./Skills.css"
import "../../Utility.css"

function Skills(props) {
    // console.log(props.skill,"skill")
    // console.log(props.skill2,"skill2")
    let {skill, skill2} = props 
    console.log(skill2,"props inside skills")
    let skillData = skill
    console.log(skillData, "skillData")
    return (
        <>
            <div className="skillContainer">
                <h1 className="heading1" id="skill">Skills</h1>
                <div className="skill">
                    {
                        skillData.map((val) => {
                            return (
                                <>
                                    <div className="skill_box">
                                        <img style={{height: '100px', width:'100px'}} src={val.image}/>
                                        <h3>{val.skill}</h3>
                                        <p>{val.description}</p>
                                        <strong>{val.level}</strong>
                                    </div>
                                </>
                            )
                        })
                    }

                   
                </div>
            </div>
        </>
    )
}

export default Skills