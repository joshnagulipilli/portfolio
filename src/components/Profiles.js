import React from 'react'
import cc from '../codechef.png'
import lc from '../leetcode.png'
import gfg from '../gfg.png'
import cf from '../codeforces.webp'
import cn from '../codingninjas.jpeg'

const Profiles = () => {
    return (
        <div className="profiles-bg" id="profiles">
            <div className='profiles-top'>
                <div className='profiles-top-one'>
                    <center><h6 className="text-uppercase size-md">Here are my coding profiles , over top most websites</h6></center>
                </div>
                <div className='profiles-top-two'>
                    <div className='one'>

                        <p><center><i class="fa-solid fa-check"></i>
                            <br />
                            solved 1000+ problems  </center></p>

                    </div>
                    <div className='one'>
                        <p><center>
                            <i class="fa-solid fa-thumbs-up"></i><br />
                            Participated in competitions</center></p>
                    </div>
                    <div className='one'>
                        <p>
                            <center>
                                <i class="fa-solid fa-user"></i><br />
                                Achieved star
                                badges
                            </center></p>
                    </div>
                    <div className='one'>
                        <p>
                            <center>
                                <i class="fa-solid fa-code-compare"></i>
                                <br />
                                consistency in practicing
                            </center>
                        </p>
                    </div>
                </div>
            </div>



            <div className="list mt-3">
                
                    <div className="file card">
                    <span class="position-absolute top-0 left-auto  translate-middle badge rounded-pill ">
                    Codechef
                   
                  </span>
                        <a href="https://www.codechef.com/users/joshna_30" target="_blank">
                        <center><img src={cc} alt=""></img></center>
                        </a>
                    </div>
                    <div className="file card">
                    <span class="position-absolute top-0 left-auto translate-middle badge rounded-pill ">
                    Leetcode
                   
                  </span>
                    <a href="https://leetcode.com/joshna_30/" target="_blank">
                    <center><img src={lc} alt=""></img></center>
                    </a>
                    </div>
                    <div className="file card">
                    <span class="position-absolute top-0 left-auto  translate-middle badge rounded-pill ">
                    GeeksforGeeks
                   
                  </span>
                    <a href="https://auth.geeksforgeeks.org/user/joshnagulipilli/practice" target="_blank">
                    <center><img src={gfg} alt=""></img></center>
                    </a>
                    </div>

                    <div className="file card">
                    <span class="position-absolute top-0 left-auto  translate-middle badge rounded-pill  ">
                    Codingninjas
                   
                  </span>
                    <a href="https://www.codingninjas.com/codestudio/profile/05cda148-9b1a-4a30-9090-c5b972e94c28" target="_blank">
                    <center><img src={cn} alt=""></img></center>
                    </a>
                    </div>
                    <div className="file card">
                    <span class="position-absolute top-0  left-auto translate-middle badge rounded-pill ">
                    Codeforces
                   
                  </span>
                    <a href="https://codeforces.com/profile/joshna_30" target="_blank">
                    <center><img src={cf} alt=""></img></center>
                    </a>
                    </div>


                </div>
            </div>
     

    )
}

export default Profiles