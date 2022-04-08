import React, { Fragment, useState } from "react";
import styles from "./CreateInfo.module.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Col, Image, Progress, Row, Steps, Popover } from "antd";
import { WarningFilled } from '@ant-design/icons';
import { BUTTON_SKILL, STEPS_ICON } from "./CreateInfoItem/CreateInfoItem.constants";
import { ButtonSkillItem, IconStepsBar } from "./CreateInfoItem/CreateInfoItem";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
const { Step } = Steps;

const content = (
   <div className={styles.content_pop}>
      <div className={styles.percent_skills}>
         <div className={styles.percent_skills_title}>
            <a href="a">
               <span className={styles.point}>+10%</span> Add profile summary
            </a>
         </div>
         <div className={styles.percent_skills_title}>
            <a href="b">
               <span className={styles.point}>+8%</span> Add job title
            </a>
         </div>
         <div className={styles.percent_skills_title}>
            <a href="c">
               <span className={styles.point}>+7%</span> Add employment history
            </a>
         </div>
         <div className={styles.percent_skills_title}>
            <a href="d">
               <span className={styles.point}>+7%</span> Add education
            </a>
         </div>
         <div className={styles.percent_skills_title}>
            <a href="e">
               <span className={styles.point}>+7%</span> Add references
            </a>
         </div>
         <div className={styles.percent_skills_title}>
            <a href="f">
               <span className={styles.point}>+6%</span> Add skills
            </a>
         </div>
      </div>
   </div>
);

const listItems = [
   {
      id: '1',
      name: 'study Spain'
   },
   {
      id: '2',
      name: 'study Spain'
   },
   {
      id: '3',
      name: 'study Spain'
   },

]

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
   marginBottom: '15px',
   position: 'relative',
   color: isDragging ? 'white' : 'black',
   fontSize: '20px',
   borderRadius: '5px',

   ...draggableStyle
})

interface LevelButton {
   titleLevel: string,
   classDivLevel: string,
   classChangeColorButton: string,
   classChangeColorText: string,
   transForm: Number,
}

const CreateInfo: React.FC = () => {
   const [show, setShow] = useState<string>('none');
   const [level, setLevel] = useState<LevelButton>({
      titleLevel: 'Novice',
      classDivLevel: 'level_skill_button_1',
      classChangeColorButton: 'button_level_1',
      classChangeColorText: 'button_text',
      transForm: 0,
   });
   const [valueInput, setValueInput] = useState<string>('Interpersonal Communication')
   const [todo, setTodo] = useState(listItems);
   const [current, setCurrent] = useState<number>(0);

   const onDragEnd = (result: DropResult) => {
      const { source, destination } = result
      if (!destination) return

      const items = Array.from(todo)
      const [newOrder] = items.splice(source.index, 1);
      items.splice(destination.index, 0, newOrder)

      setTodo(items)

   }

   const onChange = (current: number) => {
      console.log(current)
      setCurrent(current)
   };

   return (

      <div className="layout_createInfo" style={{ marginTop: "20px", height: 'auto' }}>
         <Row gutter={16} >
            <Col span={17}>
               <div
                  className='background-gradient'
                  style={{ padding: "45px 25px 35px" }}
               >
                  <Row>
                     <Col
                        span={7}
                        style={{
                           flexDirection: "column",
                           paddingLeft: "15px",
                        }}
                     >
                        <Image width={150} height={150} src="./Img/logo.jpg" />
                     </Col>
                     <Col span={17}>
                        <Row>
                           <Col span={24}>
                              <div style={{ width: "100%" }}>
                                 <form action="">
                                    <div className='form-input-user'>
                                       <div className='input-layout' >
                                          <div className="label-notification">
                                             <label htmlFor="fullName">Full Name</label>
                                             <p style={{ marginBottom: 0 }}></p>
                                          </div>
                                          <div className='input-style'>
                                             <input id="fullName" type="text" />
                                          </div>
                                       </div>
                                       <div className='input-layout' >
                                          <div className="label-notification">
                                             <label htmlFor="fullName">Full Name</label>
                                             <p style={{ marginBottom: 0 }}></p>
                                          </div>
                                          <div className='input-style'>
                                             <input id="fullName" type="text" />
                                          </div>
                                       </div>
                                       <div className='input-layout' >
                                          <div className="label-notification">
                                             <label htmlFor="fullName" style={{ color: '#e04e5c' }}>PLease Enter Your Email</label>
                                             <p >Error message</p>
                                          </div>
                                          <div className={styles.input_style_error}>
                                             <input id="fullName" type="text" />
                                             <WarningFilled />
                                          </div>
                                       </div>
                                       <div className='input-layout' >
                                          <div className="label-notification">
                                             <label htmlFor="fullName" style={{ color: '#e04e5c' }}>PLease Enter Your Phone</label>
                                             <p >Error message</p>
                                          </div>
                                          <div className={styles.input_style_error}>
                                             <input id="fullName" type="text" />
                                             <WarningFilled />
                                          </div>
                                       </div>
                                       <div className='input-layout' >
                                          <div className="label-notification">
                                             <label htmlFor="fullName" >Job Title</label>
                                             <p ></p>
                                          </div>
                                          <select className='select_style' id="fullName" >
                                             <option value="">Frontend Dev</option>
                                             <option value="">Java Dev</option>
                                          </select>
                                       </div>
                                       <div className='input-layout' >
                                          <div className="label-notification">
                                             <label htmlFor="fullName" >Country</label>
                                             <p ></p>
                                          </div>
                                          <select className='select_style' id="fullName" >
                                             <option value="">U cà</option>
                                             <option value="">VietNam</option>
                                          </select>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </Col>
                        </Row>
                     </Col>
                  </Row>
               </div>
            </Col >
            <Col span={7}>
               <div className='background-gradient' style={{ height: '100%' }}>
                  <div className="progress-success">
                     <Progress
                        className="mb-3"
                        strokeColor={"rgb(27 187 139 / 66%)"}
                        type="circle"
                        percent={70}
                        width={130}
                     />
                     <h4 className='rating'>GOOD</h4>
                     <div className="experience_quest">
                        <b style={{ color: "#222260", fontSize: '16px' }}>+10% add Experience </b>
                        <div>
                           <Popover
                              overlayInnerStyle={{ padding: "5px !important" }}
                              placement="bottomRight"
                              content={content}
                              trigger="click"
                           >
                              <QuestionCircleOutlined
                                 style={{
                                    fontSize: "20px",
                                    color: "#222260",
                                    marginTop: "10px",
                                 }}
                              />
                           </Popover>
                        </div>
                     </div>
                  </div>
               </div>
            </Col>
         </Row >
         <Row className="steps-bar">
            <div className="icon-steps-content" style={{ display: 'flex', flexFlow: 'row wrap' }}>
               {STEPS_ICON.map(({ className, src }, index) => {
                  return <IconStepsBar key={index} className={className} src={src} />
               })}
            </div>
            <Steps labelPlacement="vertical" size="small" current={current} onChange={onChange}>
               <Step style={{ cursor: "pointer" }} title={<span style={{ letterSpacing: "1px", fontSize: "15px", color: "#666d7a", fontWeight: 600, }}>
                  Personal Info
               </span>
               }
               />
               <Step
                  style={{ cursor: "pointer" }}
                  title={
                     <b style={{ letterSpacing: "1px", fontSize: "16px", color: "#666d7a", fontWeight: 600, }}>
                        Skills
                     </b>
                  }
               />
               <Step
                  style={{ cursor: "pointer" }}
                  title={
                     <b
                        style={{
                           letterSpacing: "1px",
                           fontSize: "16px",
                           color: "#666d7a",
                           fontWeight: 600,
                        }}
                     >
                        Experience
                     </b>
                  }
               />
               <Step
                  style={{ cursor: "pointer" }}
                  title={
                     <b
                        style={{
                           letterSpacing: "1px",
                           fontSize: "16px",
                           color: "#666d7a",
                           fontWeight: 600,
                        }}
                     >
                        Education
                     </b>
                  }
               />
               <Step
                  style={{ cursor: "pointer" }}
                  title={
                     <b
                        style={{
                           letterSpacing: "1px",
                           fontSize: "16px",
                           color: "#666d7a",
                           fontWeight: 600,
                        }}>Projects</b>}
               />
               <Step
                  style={{ cursor: "pointer" }}
                  title={
                     <b
                        style={{
                           letterSpacing: "1px",
                           fontSize: "16px",
                           color: "#666d7a",
                           fontWeight: 600,
                        }}
                     >
                        Soft Skills
                     </b>
                  }
               />
            </Steps>
         </Row>
         <Row
            className='background-gradient2'
            style={{ borderRadius: "10px", padding: "25px 45px 25px 25px", marginTop: '30px' }}>
            <Col id="skill" span={24}>
               <Row className="skill-title">
                  <h4 style={{ color: "#181818", fontWeight: 600, marginBottom: "0" }}>
                     Skills{" "}
                     <img width={40} src="./Img/skill_title.png" alt="" />
                  </h4>
                  <button className='buttonSkill'>
                     Fill from CyberSoft
                  </button>
                  <button className='buttonSkill' >+Add skills</button>
               </Row>
               <Row style={{ flexWrap: "wrap", width: "90%", marginBottom: "15px" }}>
                  {BUTTON_SKILL.map(({ title, className, src }, index) => {
                     return <Fragment key={index}>
                        <ButtonSkillItem
                           title={title}
                           className={className}
                           src={src}
                        />
                     </Fragment>
                  })}
               </Row>
               <Row className="pt-2 d-flex" style={{ alignItems: "start", flexWrap: "wrap" }}>
                  <Col style={{ paddingLeft: '30px' }} span={15}>
                     <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="1">
                           {(provided) => (
                              <div style={{ minHeight: '400px' }} className="1" {...provided.droppableProps} ref={provided.innerRef}>
                                 {todo.map(({ id, name }, index) => {
                                    return (
                                       <Draggable key={id} draggableId={id} index={index}>
                                          {(provided, snapshot) => (
                                             <div ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                             >
                                                <div {...provided.dragHandleProps} className='drag_button'>
                                                   <img src="./Img/drag_drop.png" alt="" />
                                                </div>
                                                <div className='skill'>
                                                   <a onClick={() => {
                                                      if (show === 'none') {
                                                         setShow('flex')
                                                      } else {
                                                         setShow('none')
                                                      }
                                                   }} className='skill_content'>
                                                      <div>
                                                         <h6 style={{ fontWeight: '600', color: 'black', fontSize: '16px' }}>{valueInput}</h6>
                                                         <p style={{ fontWeight: '600', color: 'black', fontSize: '14px' }}>{level.titleLevel}</p>
                                                      </div>
                                                      {/* <FontAwesomeIcon style={{ color: 'rgb(130, 139, 162)', fontSize: '16px' }} icon={solid("angle-down")} /> */}
                                                      <img width={15} src="./Img/downIcon.png" alt="" />
                                                   </a>
                                                   <div style={{ display: `${show}` }} className='skill_name'>
                                                      <div className='inputSkill_name'>
                                                         <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                                            <label htmlFor="fullName">Skill</label>
                                                         </div>
                                                         <div >
                                                            <input className="input_title" id="fullName" type="text" onChange={(e) => {
                                                               setValueInput(e.target.value)
                                                            }} />
                                                            {/* <FontAwesomeIcon style={{ color: '#e04e5c', fontSize: '15px' }} icon={solid("circle-exclamation")} /> */}
                                                         </div>
                                                      </div>
                                                      <div className='level_skill'>
                                                         <div >
                                                            <label htmlFor="">Level - <span className={level.classChangeColorText}>{level.titleLevel}</span></label>
                                                         </div>
                                                         <div className={level.classDivLevel}>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Novice', classDivLevel: 'level_skill_button_1', classChangeColorButton: 'button_level_1', classChangeColorText: 'level_text_1', transForm: 0 })
                                                               }} />
                                                            </label>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Beginner', classDivLevel: 'level_skill_button_2', classChangeColorButton: 'button_level_2', classChangeColorText: 'level_text_2', transForm: 100 })
                                                               }} />
                                                            </label>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Skill full', classDivLevel: 'level_skill_button_3', classChangeColorButton: 'button_level_3', classChangeColorText: 'level_text_3', transForm: 200 })
                                                               }} />
                                                            </label>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Experienced', classDivLevel: 'level_skill_button_4', classChangeColorButton: 'button_level_4', classChangeColorText: 'level_text_4', transForm: 300 })
                                                               }} />
                                                            </label>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Expert', classDivLevel: 'level_skill_button_5', classChangeColorButton: 'button_level_5', classChangeColorText: 'level_text_5', transForm: 400 })
                                                               }} />
                                                            </label>
                                                            <div className={level.classChangeColorButton} style={{ transform: `translateX(${level.transForm}%)` }}></div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className='delete_skill'>
                                                   <button className="btn">
                                                      <img src="./Img/delete.png" alt="" />
                                                   </button>
                                                </div>
                                             </div>
                                          )}
                                       </Draggable>
                                    )
                                 })}
                              </div>
                           )}
                        </Droppable>
                     </DragDropContext>
                  </Col>
               </Row>
            </Col>
            <Col id="experience" style={{ marginTop: '50px' }} span={24}>
               <Row className="skill-title">
                  <h4 style={{ color: "#181818", fontWeight: 600, marginBottom: "0" }}>
                     Skills{" "}
                     <img width={40} src="./Img/skill_title.png" alt="" />
                  </h4>
                  <button className='buttonSkill'>
                     Fill from CyberSoft
                  </button>
                  <button className='buttonSkill' >+Add skills</button>
               </Row>
               <Row style={{ flexWrap: "wrap", width: "90%", marginBottom: "15px" }}>
                  {BUTTON_SKILL.map(({ title, className, src }, index) => {
                     return <Fragment key={index}>
                        <ButtonSkillItem
                           title={title}
                           className={className}
                           src={src}
                        />
                     </Fragment>
                  })}
               </Row>
               <Row className="pt-2 d-flex" style={{ alignItems: "start", flexWrap: "wrap" }}>
                  <Col style={{ paddingLeft: '30px' }} span={15}>
                     <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="1">
                           {(provided) => (
                              <div style={{ minHeight: '400px' }} className="1" {...provided.droppableProps} ref={provided.innerRef}>
                                 {todo.map(({ id, name }, index) => {
                                    return (
                                       <Draggable key={id} draggableId={id} index={index}>
                                          {(provided, snapshot) => (
                                             <div ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                             >
                                                <div {...provided.dragHandleProps} className='drag_button'>
                                                   <img src="./Img/drag_drop.png" alt="" />
                                                </div>
                                                <div className='skill'>
                                                   <a onClick={() => {
                                                      if (show === 'none') {
                                                         setShow('flex')
                                                      } else {
                                                         setShow('none')
                                                      }
                                                   }} className='skill_content'>
                                                      <div>
                                                         <h6 style={{ fontWeight: '600', color: 'black', fontSize: '16px' }}>{valueInput}</h6>
                                                         <p style={{ fontWeight: '600', color: 'black', fontSize: '14px' }}>{level.titleLevel}</p>
                                                      </div>
                                                      {/* <FontAwesomeIcon style={{ color: 'rgb(130, 139, 162)', fontSize: '16px' }} icon={solid("angle-down")} /> */}
                                                      <img width={15} src="./Img/downIcon.png" alt="" />
                                                   </a>
                                                   <div style={{ display: `${show}` }} className='skill_name'>
                                                      <div className='inputSkill_name'>
                                                         <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                                                            <label htmlFor="fullName">Skill</label>
                                                         </div>
                                                         <div >
                                                            <input className="input_title" id="fullName" type="text" onChange={(e) => {
                                                               setValueInput(e.target.value)
                                                            }} />
                                                            {/* <FontAwesomeIcon style={{ color: '#e04e5c', fontSize: '15px' }} icon={solid("circle-exclamation")} /> */}
                                                         </div>
                                                      </div>
                                                      <div className='level_skill'>
                                                         <div style={{ marginBottom: '10px' }}>
                                                            <label htmlFor="">Level - <span className={level.classChangeColorText}>{level.titleLevel}</span></label>
                                                         </div>
                                                         <div className={level.classDivLevel}>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Novice', classDivLevel: 'level_skill_button_1', classChangeColorButton: 'button_level_1', classChangeColorText: 'level_text_1', transForm: 0 })
                                                               }} />
                                                            </label>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Beginner', classDivLevel: 'level_skill_button_2', classChangeColorButton: 'button_level_2', classChangeColorText: 'level_text_2', transForm: 100 })
                                                               }} />
                                                            </label>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Skill full', classDivLevel: 'level_skill_button_3', classChangeColorButton: 'button_level_3', classChangeColorText: 'level_text_3', transForm: 200 })
                                                               }} />
                                                            </label>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Experienced', classDivLevel: 'level_skill_button_4', classChangeColorButton: 'button_level_4', classChangeColorText: 'level_text_4', transForm: 300 })
                                                               }} />
                                                            </label>
                                                            <label className='level_skill_item'>
                                                               <input type="radio" onClick={() => {
                                                                  setLevel({ titleLevel: 'Expert', classDivLevel: 'level_skill_button_5', classChangeColorButton: 'button_level_5', classChangeColorText: 'level_text_5', transForm: 400 })
                                                               }} />
                                                            </label>
                                                            <div className={level.classChangeColorButton} style={{ transform: `translateX(${level.transForm}%)` }}></div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className='delete_skill'>
                                                   <button className="btn">
                                                      <img src="./Img/delete.png" alt="" />
                                                   </button>
                                                </div>
                                             </div>
                                          )}
                                       </Draggable>
                                    )
                                 })}
                              </div>
                           )}
                        </Droppable>
                     </DragDropContext>
                  </Col>
               </Row>
            </Col>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
            <p>hehe</p>
         </Row >

      </div >
   );
};

export default CreateInfo;
