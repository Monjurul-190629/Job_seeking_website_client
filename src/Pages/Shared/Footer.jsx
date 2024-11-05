

const Footer = ({ darkMode }) => {
    return (
        <div>
            <hr />
            <footer className={`grid grid-cols-1 lg:grid-cols-3 justify-center text-center gap-10 md:px-10 py-20 ${darkMode ? 'bg-gray-900' : 'bg-blue-800'} ${darkMode ? 'text-white' : 'text-gray-100'}`}>
                <nav className="flex flex-col">
                    <img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" className="w-1/4 ml-40 md:ml-36 mb-5" />
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
                <nav className="flex flex-col">
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Enterprise</a>
                    <a className="link link-hover">Security</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav className="flex flex-col">
                    <h6 className="footer-title">Apps</h6>
                    <a className="link link-hover">Mac</a>
                    <a className="link link-hover">Windows</a>
                    <a className="link link-hover">iPhone</a>
                    <a className="link link-hover">Android</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;