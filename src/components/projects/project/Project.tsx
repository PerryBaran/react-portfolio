import style from './project.module.css';
import { LogoInfo } from '../../../Interfaces';

interface Props {
    projectSrc: string,
    projectTitle: string,
    projectDescription: string,
    skills: LogoInfo[],
    repohref: string,
    livehref?: string
}

function Project(props: Props) {
    const {
        projectSrc,
        projectTitle,
        projectDescription,
        skills,
        repohref,
        livehref
    } = props

    return(
        <section className={style.container}>
            <img src={projectSrc} alt={`${projectTitle} page`}/>
            <div>
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
                <ul>
                    {skills.map(((skill, i) => {
                        return <li key={i}><img src={skill.src} alt={skill.name}/></li>
                    }))}
                </ul>
                <a href={repohref} target="_blank" rel="noreferrer">Repository</a>
                {livehref && <a href={livehref} target="_blank" rel="noreferrer">Live Preview</a>}
            </div>
        </section>
    );
};

export default Project