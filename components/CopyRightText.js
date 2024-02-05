const CopyRightText = ({ fixed = false, extraCls = false }) => {
  return (
    <div
      className={`iknow_tm_copyright ${
        extraCls ? extraCls : fixed ? "fixed" : "hidden"
      }`}
    >
      <div className="container">
        <div className="inner">
          <div className="left">
            <p>
              Designed By ©{" "}
              <a href="https://www.facebook.com/s.s0han" target="_blank">
                Sohan
              </a>
            </p>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="https://www.facebook.com/s.s0han" target="_blank">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/sheikh_sohann" target="_blank">X</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRightText;
