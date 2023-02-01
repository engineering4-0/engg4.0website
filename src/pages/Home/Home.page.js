import {
    Grid,
    Column,
    Button,
} from '@carbon/react';
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import './Home.style.css';
import Fade from 'react-reveal/Fade';
import Registration from '../../components/Registration/Registration.component';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    return (<>
        <Grid style={{ marginBottom: "6em" }}>
            <Column lg={1} md={0} sm={0}></Column>
            <Column lg={9} md={8} sm={4} className='home-heading'>
                <p className='heading'><span className='underline'>Student-run</span>, Applied Science Club! 👋</p>
                <Button onClick={() => navigate('about')}>Learn More About Us</Button>
            </Column>
            <Column lg={5} md={8} sm={4}>
                <Registration />
            </Column>
            <Column lg={1} md={0} sm={0}></Column>
        </Grid>
        {/* <Fade bottom>
            <Grid style={{ marginBottom: "6em" }}>
                <Column lg={1} md={0} sm={0}></Column>

                <Column lg={7} md={4} sm={4} className='department-section'>
                    <p className='departments hover-underline-animation'>Mechanical</p><br></br>
                    <p className='departments hover-underline-animation'>Computer Science</p><br></br>
                    <p className='departments hover-underline-animation'>Electrical</p><br></br>
                    <p className='departments hover-underline-animation'>people intrested in engineering..</p><br></br>
                    <p className='departments hover-underline-animation'>The club is for every engineer!</p>
                </Column>

                <Column lg={7} md={4} sm={4}>
                    <p style={{ fontWeight: 400, fontSize: "20px", marginBottom: "1em" }}>We are a diverse, inclusive student-run organization seeking
                        to provide a platform to the science and technology enthusiasts of University of Windsor to</p>
                    <div>
                        <hr></hr>
                        <UnorderedList >
                            <ListItem style={{ color: "#616161" }}>
                                Attend workshops and talks by industry professionals
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Work on real-world projects,
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Organize study groups,
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Get peer review or help to participate in technical competitions and paper presentations, (not to forget!)
                            </ListItem>
                            <ListItem style={{ color: "#616161" }}>
                                Grow your professional network through social events, and so much more!
                            </ListItem>
                        </UnorderedList>
                    </div>
                </Column>
                <Column lg={1} md={0} sm={0}></Column>

            </Grid>
        </Fade> */}
        <hr></hr>
        <Fade bottom>
            <Grid style={{ marginBottom: "3em" }}>
                <Column lg={1} md={0} sm={0}></Column>
                <Column lg={12} md={8} sm={4} style={{ textAlign: "left" }}>
                    <p className='heading-02'>Follow us on our social media platform for regular updates!</p><br></br>
                    <div>
                    </div>
                </Column>
                <Column lg={2} md={8} sm={4} style={{ marginTop: "1em" }}>
                    <AiOutlineInstagram size="4em" className='icons instagram' onClick={() => window.location.href = "https://www.instagram.com/eng4.0_uwin/"} />
                    <AiFillLinkedin size="4em" className='icons' />
                </Column>
                <Column lg={1} md={0} sm={0}></Column>
            </Grid>
        </Fade>
        <Grid style={{ marginBottom: "1em" }}>
            <Column lg={16} md={8} sm={4} style={{ textAlign: "center", marginBottom: "1em" }}>
                Designed with <span style={{ color: "red" }}>♥️</span> by a member, <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/rajcrk/'>Raj</a>
            </Column>
            <Column lg={16} md={8} sm={4} style={{ textAlign: "center" }}>
                Contribute to this website here, <a target="_blank" rel="noreferrer" href='https://github.com/engineering4-0/website'>GitHub</a>
            </Column>
        </Grid>
    </>);
};

export default HomePage;