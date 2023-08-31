import React from "react";
import "./Stepper.css";
import stepperBg from '../../assets/stepperbg.png'
const Stepper = () => {
  return (
    <>
      <div class="timeline-section stepper">
        <div class="button_design">
          <button class="button_design">1971</button>
        </div>
        <div class="timeline-items">
          <div class="timeline-item first_timeline">
            <div class="timeline-dot">1982</div>
            <div class="timeline-date">
              <div class="timeline-content">
                <div className="parent_text">
                  <div className="left_text">
                    <h3 className="brandname">Brand Name</h3>
                    <p className="kiss">Kiss</p>
                    <h3 className="songname">Song Name</h3>
                    <p className="love_it_loud_text">Love it loud</p>
                  </div>
                  {/* right text */}
                  <div className="right_text">
                    <h3 className="my_story">My Story</h3>
                    <p className="story_details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                    <div className="edit_delete_icons">
                      <span className="edit_icon"><i class="fa-regular fa-pen-to-square"></i></span>
                      <span className="delete_icon"><i class="fa-solid fa-trash"></i></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">1982</div>
            <div class="timeline-date">
              <div class="timeline-content">
                <div className="parent_text">
                  <div className="left_text">
                    <h3 className="brandname">Brand Name</h3>
                    <p className="kiss">Kiss</p>
                    <h3 className="songname">Song Name</h3>
                    <p className="love_it_loud_text">Love it loud</p>
                  </div>
                  {/* right text */}
                  <div className="right_text">
                    <h3 className="my_story">My Story</h3>
                    <p className="story_details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                    <div className="edit_delete_icons">
                      <span className="edit_icon"><i class="fa-regular fa-pen-to-square"></i></span>
                      <span className="delete_icon"><i class="fa-solid fa-trash"></i></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot">1982</div>
            <div class="timeline-date">
              <div class="timeline-content">
                <div className="parent_text">
                  <div className="left_text">
                    <h3 className="brandname">Brand Name</h3>
                    <p className="kiss">Kiss</p>
                    <h3 className="songname">Song Name</h3>
                    <p className="love_it_loud_text">Love it loud</p>
                  </div>
                  {/* right text */}
                  <div className="right_text">
                    <h3 className="my_story">My Story</h3>
                    <p className="story_details">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                    <div className="edit_delete_icons">
                      <span className="edit_icon"><i class="fa-regular fa-pen-to-square"></i></span>
                      <span className="delete_icon"><i class="fa-solid fa-trash"></i></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
        <div class="button_design">
          <button class="bottom_button_design">1971</button>
        </div>
      </div>



    </>



  );
};

export default Stepper;
