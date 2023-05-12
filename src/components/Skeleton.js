import React, { useState } from 'react';
import { Box, styled,  Typography, Container, Divider, Grid, List, ListItem, ListItemText, Icon } from '@mui/material';
import Header from './Header';
import { BorderRight, Height } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';

const skills = [
  "React",
  "Node",
  "TypeScript",
  "Python",
  "C#",
  "AWS",
  "Azure",
  "G Cloud",
  "SQL",
  "DynamoDB",
  "Jira",
  "Git",
  "Scrum"
]

const personalSkills = [
  "Project Management",
  "Software Development",
  "People Management",
  "Client Management",
  "Team Leadership",
  "IT Management"
]

const workHistory = [
  {
    period: "March 2029 - Current",
    title: "iMachinary - Director",
    country: "Argentina",
    description: [
      "Responsible for overseeing the strategic direction, performance, and financial plans of the organization.", 
      "Work with the executive team to make critical decisions that impact the company's success and represent the organization to external stakeholders",
      "Developmen of an internal Portal for vendor management, invoicing, and reporting. Development of a series of Connectors between CMS, CAT Tools and client apps",
    ],
    techStack: "NodeJS, NextJs, NestJS, React, DynamoDB, Mysql, Lightsail, AWS, Azure, G Cloud, Jira, Git, Scrum, Asana"
  },
  {
    period: "January 2018 - October 2020",
    title: "IRC / Signpost - Team Lead",
    country: "Argentina",
    description: [
      "Responsible for leading a group of developers in the creation, testing, and deployment of software applications.",
      "Work closely with the project manager and other stakeholders to ensure that projects are completed on time and within budget.",
      "Manage the technical aspects of the development process,including defining the architecture, ensuring adherence to coding standards, and overseeing code reviews and testing.",
      "Development of information website for refugees and asylum seekers for many countries (https://www.signpost.ngo/)"
    ],
    techStack: "Python, Django, Azure, NodeJS, React, Firebase, Mysql, Twilio, Jira, Git, Scrum"
  },
  {
    period: "January 2019 - August 2019",
    title: "UBISat - Project Manager",
    country: "Argentina",
    description: [
      "Responsible for overseeing the planning, execution, and delivery of software development projects, working closely with stakeholders to ensure that projects are aligned with business objectives, and manage project resources, including timelines, budgets, and team members.",
      "Work closely with the development team to define project requirements, identify risks and dependencies, and develop and implement project plans.",
      "Development of a GPS tracking system for vehicles and assets. Website, Mobile App and Backend development."
    ],    
    techStack: ".Net, PHP, React, Mysql, MondoDB, Azure, Jira, Trello, Git, Scrum"
  },
  {
    period: "March 2014 - January 2019",
    title: "UBISat - Senior Developer",
    country: "Argentina",
    description: [
      "Design user interfaces, develop and implement front-end/back-end systems, and integrating with third-party services.",
      "Development of a GPS tracking system for vehicles and assets. Website, Mobile App and Backend development."
    ],    
    techStack: ".Net, PHP, React, Mysql, MondoDB, Azure"
  },
  {
    period: "May 2017 - January 2018",
    title: "QMAS - Developer",
    country: "Argentina",
    description: [],
    techStack: "Guidewire suite, GOSU, SQL Server"
  },
  {
    period: "July 2012 - March 2014",
    title: "Velocity Partners (Endava) - Senior Developer",
    country: "Argentina",
    description: [
      "PeopleMatters: development of a Human Resources management app ",
      "WebMD: tech upgrade of a medical information website",
    ],
    techStack: ".Net, KnockoutJS, AngularJS, SQL Server"
  },
]

const SideBar = styled(Box)({
  minWidth: "25%",
  backgroundColor: "grey",
  justifyContent: "flex-start",
  gap: "10px",
});

const ColumnLeft = styled(Box)({
  flex: "2",
  padddingRight: "10px",
  borderRight: "1px solid",
  textAlign: "left",
  padding: "20px",
  width: "40%",
  height: "1230px",
  borderColor: "rgba(0, 0, 0, 0.12)",
  backgroundColor: "#cedef2"
})

const ColumnRight = styled(Box)({
  flex: "3",
  padddingLeft: "10px",
  textAlign: "left",
  padding: "10px",
})

const TwoColumnLayout = styled(Box)({
  display: "flex",
  flexDirection: "row",
})

const UL = (props) => {
  const { skills } = props;  
  return (
    <ul style={{fontSize: "11px", paddingInlineStart: "5px", listStyleType: "none"}}>
      {skills.map((skill, index) => (
        <li key={index} sx={{ marginBottom: 2 }}>                 
          <CheckIcon sx={{ fontSize: 10 }}/> {skill}
        </li>                
      ))}
    </ul> 
  )
}

const WorkDetails = (props) => {
  const { history } = props;
  console.log(history)
  return (
    history.map((work, index) => {
      return (
       <Box>        
        <Typography sx={{fontSize: "14px"}}>
         {work.title}
        </Typography>
        <Typography sx={{fontSize: "11px"}}>
         {work.period}
        </Typography>
        <ul>
        {work.description.map((desc, index) => {
          return (
            <li key={index} sx={{ marginBottom: 2 }}>
              <Typography sx={{fontSize: "12px", textAlign: "justify", textJustify: "inter-word"}}>
                {desc}
              </Typography>
            </li>
          )
        })}
        </ul>
        <Typography sx={{fontSize: "11px"}}>
          <strong>Tech stack: </strong> {work.techStack}
        </Typography>
        <br/>
        {index < history.length - 1 && 
          <>
            <Divider/>
            <br/>
          </>
        }
      </Box>
      )
    })
  )
      
}

const Skeleton = () => {
  return (
    <Container>  
      <Header/> 
      <TwoColumnLayout>
        <ColumnLeft style={{fontSize: "12px"}}>
          <Typography variant="h6">
            Summary
          </Typography>
          <Typography style={{fontSize: "12px", textAlign: "justify", textJustify: "inter-word"}}>
          Experienced System Engineer with a strong background in management and a passion for development. Proven track record of success working with large enterprises, delivering complex projects on time and within budget. Excellent communication and collaboration skills with cross-functional teams and stakeholders. Always seeking to learn and improve. Confident in making significant contributions to any organization.          
          </Typography>
          <br/>
          <Divider/>
          <br/>
          <Typography variant="h6">
            Skills
          </Typography>
          <Typography style={{fontSize: "12px"}}>
          <Grid container>
            <Grid item xs={6}>
              <UL skills={personalSkills.slice(0, Math.ceil(personalSkills.length / 2))}/>                           
            </Grid>
            <Grid item xs={6}>
              <UL skills={personalSkills.slice(Math.ceil(personalSkills.length / 2), Math.ceil((personalSkills.length / 2) * 2))} />                    
            </Grid>          
          </Grid>         
          
          </Typography>
          <Divider/>
          <br/>
          <Typography variant="h6">
            Technical Skills
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <UL skills={skills.slice(0, Math.ceil(skills.length / 3))}/>                           
            </Grid>
            <Grid item xs={4}>
              <UL skills={skills.slice(Math.ceil(skills.length / 3), Math.ceil((skills.length / 3) * 2))} />                    
            </Grid>
            <Grid item xs={4}>
              <UL skills={skills.slice(Math.ceil((skills.length / 3) * 2))} />                                  
            </Grid>
          </Grid>         
                        
          
          <Divider/>
          <br/>
          <Typography variant="h6">
            Education
          </Typography>
          <Typography style={{fontSize: "12px"}}>
          System Engineer
          </Typography>
          <Typography style={{fontSize: "12px"}}>
          Universidad Abierta Interamericana, Argentina
          </Typography>
          <br/>
          <Divider/>
          <br/>
          <Typography variant="h6">
            Languages
          </Typography>
          <Typography style={{fontSize: "12px"}}>
            Spanish (Native)
          </Typography>
          <Typography style={{fontSize: "12px"}}>
            English (Advanced, C1)
          </Typography>
          <Typography style={{fontSize: "12px"}}>
            French (Beginner, A1)
          </Typography>
          
          
        </ColumnLeft>
        <ColumnRight>    
        <Typography variant="h6">
            Work History
          </Typography>    
          <WorkDetails history={workHistory}/>
        </ColumnRight>
      </TwoColumnLayout>


    </Container>
  )
}

export default Skeleton;