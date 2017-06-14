import React from 'react';
import PDF from 'react-pdf-js';

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }

  onPageComplete(page) {
    this.setState({ page });
  }

  handlePrevious() {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext() {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination(page, pages) {
    let previousButton = <li className="left previous" onClick={this.handlePrevious}><button className="btn"><i className="fa fa-arrow-left"></i> Previous</button></li>;
    if (page === 1) {
      previousButton = <li className="left previous disabled"><button className="btn"><i className="fa fa-arrow-left"></i> Previous</button></li>;
    }
    let nextButton = <li className="right next" onClick={this.handleNext}><button className="btn">Next <i className="fa fa-arrow-right"></i></button></li>;
    if (page === pages) {
      nextButton = <li className="right next disabled"><button className="btn">Next <i className="fa fa-arrow-right"></i></button></li>;
    }
    return (
      <nav>
        <ul className="pager list-reset clearfix">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF file="/documents/document.pdf" onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} className="col-12" />
        {pagination}
      </div>
    )
  }
}

export default PDFViewer;
