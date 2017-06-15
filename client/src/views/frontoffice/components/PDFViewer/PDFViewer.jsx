import React from 'react';
import PDF from 'react-pdf-js';
import './PDFViewer.css';

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
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
    let previousButton = (
      <li className="left previous">
        <button className="btn btn--pdf-nav" onClick={this.handlePrevious}>
          <i className="pvn-icon pvn-icon--arrow-left" />
        </button>
      </li>
    );

    if (page === 1) {
      previousButton = (
        <li className="left previous">
          <button className="btn btn--pdf-nav disabled" disabled>
            <i className="pvn-icon pvn-icon--arrow-left" />
          </button>
        </li>
      );
    }

    let nextButton = (
      <li className="right next">
        <button className="btn btn--pdf-nav" onClick={this.handleNext}>
          <i className="pvn-icon pvn-icon--arrow-right" />
        </button>
      </li>
    );

    if (page === pages) {
      nextButton = (
        <li className="right next">
          <button className="btn btn--pdf-nav disabled" disabled>
            <i className="pvn-icon pvn-icon--arrow-right" />
          </button>
        </li>
      );
    }
    return (
      <nav className="pdf-viewer-nav">
        <ul className="pdf-viewer-pager list-reset clearfix">
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
        <PDF
          file="/documents/document.pdf"
          onDocumentComplete={this.onDocumentComplete}
          onPageComplete={this.onPageComplete}
          page={this.state.page}
          className="col-12"
        />
        {pagination}
      </div>
    );
  }
}

export default PDFViewer;
