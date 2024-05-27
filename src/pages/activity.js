import React from "react"

export default class Activity extends React.Component {
    render() {
        return (
            <main className="container-fluid px-4 pt-4 d-flex gap-4">
                <div>
                    <section>
                        <article>
                            <div className="post_title"></div>
                            <img className="post_img d-block"
                                 src="../../public/images/abstract-purple-digital-art-retrowave-wallpaper%201.png"></img>
                            <div className="post_msg">
                                <div className="d-flex align-items-center gap-1 mt-3 post_msg_title">
                                    <img className="icon d-block" src="../../public/icons/Comment.png"></img>
                                    <span className="d-block"><a className="link" href="#">Jason Anderson</a> commented:</span>
                                </div>
                                <div className="post_msg_body mt-3 px-3">
                                    <p>
                                        Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in
                                        the sea. Keep
                                        love
                                        in your heart. A life without it is like a sunless garden when the flowers
                                        are dead. Because
                                        summer is passion, memories, light breeze, the sun that appears on the skin
                                        and caresses the
                                        face.
                                    </p>
                                    <span className="post_msg_date mt-3 d-block">— Jason, 10:30 am</span>
                                </div>
                                <div className="d-flex mt-3 gap-4 pb-5">
                                    <div className="d-flex gap-2">
                                        <img className="icon d-block" src="../../public/icons/Eye.png"></img>
                                        <span className="d-block">432</span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <img className="icon d-block" src="../../public/icons/Comment.png"></img>
                                        <span className="d-block">47</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="post_title d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Sunset Sunset Sunset</h5>
                                <div className="d-flex justify-content-between gap-3">
                                    <img className="icon d-block" src="../../public/icons/Time.png"></img>
                                    <span className="d-block">53 minutes ago</span>
                                    <img className="icon d-block" src="../../public/icons/Small_Arrow_Down.png"></img>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="post_title d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Morning of Siberia</h5>
                                <div className="d-flex justify-content-between gap-3">
                                    <img className="icon d-block" src="../../public/icons/Time.png"></img>
                                    <span className="d-block">56 minutes ago</span>
                                    <img className="icon d-block" src="../../public/icons/Small_Arrow_Down.png"></img>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
                <div>
                    <aside>
                        <div
                            className="profile d-flex flex-column justify-content-center align-items-center gap-4 px-4 py-4">
                            <div className="profile_photo">
                                <img src="../../public/images/avatar.jpg"></img>
                            </div>
                            <div
                                className="profile_description d-flex flex-column justify-content-center align-items-center gap-2">
                                <span className="d-block profile_name">Dmitriy Smirnov</span>
                                <span className="d-block profile_job">Web developer</span>
                            </div>
                            <div className="d-flex justify-content-around gap-3">
                                <a className="d-block" href="https://t.me/D1mazavr1K" target="_blank">
                                    <img className="icon" src="../../public/icons/Telegram.png"></img>
                                </a>
                                <a className="d-block" href="https://github.com/D1mazavr1K" target="_blank">
                                    <img className="icon" src="../../public/icons/Github.png"></img>
                                </a>
                                <a className="d-block" href="https://www.linkedin.com/in/d1mazavr1k/" target="_blank">
                                    <img className="icon" src="../../public/icons/Linkedin.png"></img>
                                </a>
                            </div>
                        </div>
                        <menu>
                            <div className="menu_header d-flex justify-content-between align-items-center px-3">
                                <span className="d-block">Navigation</span>
                                <img className="d-block icon icon-rotate"
                                     src="../../public/icons/Small_Arrow_Down.png"></img>
                            </div>
                            <div className="menu_section d-flex flex-column gap-3 px-3 py-3">
                                <div className="menu_item">
                                    <div className="menu_item_left">
                                        <img className="icon d-block" src="../../public/icons/Person.png"></img>
                                        <span className="d-block">My profile</span>
                                    </div>
                                    <div className="menu_item_right"></div>
                                </div>
                                <div className="menu_item">
                                    <div className="menu_item_left">
                                        <img className="icon d-block" src="../../public/icons/Finance.png"></img>
                                        <span className="d-block">Balance</span>
                                    </div>
                                    <div className="menu_item_right">
                                        <span className="account_balance_val">$ 1,430</span>
                                    </div>
                                </div>
                                <div className="menu_item">
                                    <div className="menu_item_left">
                                        <img className="icon d-block" src="../../public/icons/Scheme.png"></img>
                                        <span className="d-block">Connections</span>
                                    </div>
                                    <div className="menu_item_right">
                                        <div className="menu_val_red menu_val">29</div>
                                    </div>
                                </div>
                                <div className="menu_item">
                                    <div className="menu_item_left">
                                        <img className="icon d-block" src="../../public/icons/People.png"></img>
                                        <span className="d-block">Friends</span>
                                    </div>
                                    <div className="menu_item_right"></div>
                                </div>
                            </div>
                            <div className="menu_section d-flex flex-column gap-3 px-3 py-3">
                                <div className="menu_item">
                                    <div className="menu_item_left">
                                        <img className="icon d-block" src="../../public/icons/Calendar.png"></img>
                                        <span className="d-block">Events</span>
                                    </div>
                                    <div className="menu_item_right">
                                        <div className="menu_val_green menu_val">45</div>
                                    </div>
                                </div>
                                <div className="menu_item">
                                    <div className="menu_item_left">
                                        <img className="icon d-block" src="../../public/icons/Settings.png"></img>
                                        <span className="d-block">Account settings</span>
                                    </div>
                                    <div className="menu_item_right"></div>
                                </div>
                            </div>
                        </menu>
                        <div className="send_msg">
                            <div className="form_header d-flex justify-content-between align-items-center px-3">
                                <span className="d-block">Share your thoughts</span>
                                <img className="d-block icon icon-rotate"
                                     src="../../public/icons/Small_Arrow_Down.png"></img>
                            </div>
                            <form className="share_form" method="post" action="javascript:void(0);">
                                <div>
                                    <textarea placeholder="Enter your message..."></textarea>
                                </div>
                                <button className="d-block btn" type="submit">Save</button>
                            </form>
                        </div>
                    </aside>
                </div>
            </main>
        )
    }
}
