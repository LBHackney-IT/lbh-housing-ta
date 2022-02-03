const SummaryPanel = (): JSX.Element => {
  return (
    <div className="lbh-summary-panel">
      <div className="lbh-summary-panel__content">
        <a href="#" className="lbh-link">1 bedroom, 3 bathrooms</a>
        <p className="lbh-body-m">Shared bathroom, shared kitchen</p>
        <p className="lbh-body-m govuk-!-margin-bottom-3">Unknown access, unknown floor</p>
        <p className="lbh-body-s">Hackney Hostel - Hostel LSE, £32 a night</p>
        <p className="lbh-body-s">Room 1, 11 Meynell Road, Hackney. E9 7AP.</p>
      </div>
      <img className="lbh-summary-panel__img" src="https://hackneywebsite-wp-mediafiles.s3.eu-west-2.amazonaws.com/wp-content/uploads/1920_1920-hackneytownhallwithlights-2.jpg" alt="Hackney at Christmas" />
    </div>
  );
};

export default SummaryPanel;