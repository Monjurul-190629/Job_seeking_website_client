

const Footer = ({ darkMode }) => {
    return (
        <div>
            <hr />
            
            <footer className={`grid grid-cols-1 lg:grid-cols-4 justify-center text-center gap-10 md:px-10 py-20 ${darkMode ? 'bg-[#1d1734]' : 'bg-[#d8cdfc]'} ${darkMode ? 'text-white' : 'text-black'}`}>
                <nav className="flex flex-col">
                    <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg" className="w-1/4 ml-40 md:ml-24 mb-1" />
                    <p className="font-bold text-2xl">SkillTrackers</p>
                    <div>
                        24/7 malibag, Dhaka.
                    </div>
                    <div>
                        Copyright © 2024 - All right reserved
                    </div>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Github</a>
                </nav>
                

            </footer>
        </div>
    );
};

export default Footer;