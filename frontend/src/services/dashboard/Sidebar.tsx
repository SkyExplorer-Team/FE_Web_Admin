function Sidebar() {
  return (
    <>
      <div id="sidebar">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header position-relative">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="./assets/compiled/svg/logo.svg"
                    alt="Logo"
                    srcSet=""
                  />
                </a>
              </div>
              <div className="theme-toggle d-flex gap-2 align-items-center mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--system-uicons"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 21 21"
                >
                  {/* ... (Your SVG content) ... */}
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                      opacity=".3"
                    ></path>
                    <g transform="translate(-210 -1)">
                      <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                      <circle cx="220.5" cy="11.5" r="4"></circle>
                      <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                    </g>
                  </g>
                </svg>
                <div className="form-check form-switch fs-6">
                  <input
                    className="form-check-input  me-0"
                    type="checkbox"
                    id="toggle-dark"
                    style={{ cursor: "pointer" }}
                  />
                  <label className="form-check-label"></label>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--mdi"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  {/* ... (Your SVG content) ... */}
                  <path
                    fill="currentColor"
                    d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"
                  ></path>
                </svg>
              </div>
              <div className="sidebar-toggler x">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-title">Menu</li>

              <li className="sidebar-item  ">
                <a href="index.html" className="sidebar-link">
                  <i className="bi bi-grid-fill"></i>
                  <span>Dashboard</span>
                </a>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-stack"></i>
                  <span>Components</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="component-accordion.html" className="submenu-link">
                      Accordion
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-alert.html" className="submenu-link">
                      Alert
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-badge.html" className="submenu-link">
                      Badge
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="component-breadcrumb.html"
                      className="submenu-link"
                    >
                      Breadcrumb
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-button.html" className="submenu-link">
                      Button
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-card.html" className="submenu-link">
                      Card
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-carousel.html" className="submenu-link">
                      Carousel
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-collapse.html" className="submenu-link">
                      Collapse
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-dropdown.html" className="submenu-link">
                      Dropdown
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="component-list-group.html"
                      className="submenu-link"
                    >
                      List Group
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-modal.html" className="submenu-link">
                      Modal
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-navs.html" className="submenu-link">
                      Navs
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="component-pagination.html"
                      className="submenu-link"
                    >
                      Pagination
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-progress.html" className="submenu-link">
                      Progress
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-spinner.html" className="submenu-link">
                      Spinner
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-toasts.html" className="submenu-link">
                      Toasts
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="component-tooltip.html" className="submenu-link">
                      Tooltip
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-collection-fill"></i>
                  <span>Extra Components</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a
                      href="extra-component-avatar.html"
                      className="submenu-link"
                    >
                      Avatar
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="extra-component-comment.html"
                      className="submenu-link"
                    >
                      Comment
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="extra-component-divider.html"
                      className="submenu-link"
                    >
                      Divider
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="extra-component-date-picker.html"
                      className="submenu-link"
                    >
                      Date Picker
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="extra-component-sweetalert.html"
                      className="submenu-link"
                    >
                      Sweet Alert
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="extra-component-toastify.html"
                      className="submenu-link"
                    >
                      Toastify
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="extra-component-rating.html"
                      className="submenu-link"
                    >
                      Rating
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item active has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-grid-1x2-fill"></i>
                  <span>Layouts</span>
                </a>

                <ul className="submenu active">
                  <li className="submenu-item active ">
                    <a href="layout-default.html" className="submenu-link">
                      Default Layout
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="layout-vertical-1-column.html"
                      className="submenu-link"
                    >
                      1 Column
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="layout-vertical-navbar.html"
                      className="submenu-link"
                    >
                      Vertical Navbar
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="layout-rtl.html" className="submenu-link">
                      RTL Layout
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="layout-horizontal.html" className="submenu-link">
                      Horizontal Menu
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-title">Forms &amp; Tables</li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-hexagon-fill"></i>
                  <span>Form Elements</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="form-element-input.html" className="submenu-link">
                      Input
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="form-element-input-group.html"
                      className="submenu-link"
                    >
                      Input Group
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="form-element-select.html" className="submenu-link">
                      Select
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="form-element-radio.html" className="submenu-link">
                      Radio
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="form-element-checkbox.html"
                      className="submenu-link"
                    >
                      Checkbox
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="form-element-textarea.html"
                      className="submenu-link"
                    >
                      Textarea
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  ">
                <a href="form-layout.html" className="sidebar-link">
                  <i className="bi bi-file-earmark-medical-fill"></i>
                  <span>Form Layout</span>
                </a>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-journal-check"></i>
                  <span>Form Validation</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a
                      href="form-validation-parsley.html"
                      className="submenu-link"
                    >
                      Parsley
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-pen-fill"></i>
                  <span>Form Editor</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="form-editor-quill.html" className="submenu-link">
                      Quill
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="form-editor-ckeditor.html"
                      className="submenu-link"
                    >
                      CKEditor
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="form-editor-summernote.html"
                      className="submenu-link"
                    >
                      Summernote
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="form-editor-tinymce.html" className="submenu-link">
                      TinyMCE
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  ">
                <a href="table.html" className="sidebar-link">
                  <i className="bi bi-grid-1x2-fill"></i>
                  <span>Table</span>
                </a>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-file-earmark-spreadsheet-fill"></i>
                  <span>Datatables</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="table-datatable.html" className="submenu-link">
                      Datatable
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="table-datatable-jquery.html"
                      className="submenu-link"
                    >
                      Datatable (jQuery)
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-title">Extra UI</li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-pentagon-fill"></i>
                  <span>Widgets</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="ui-widgets-chatbox.html" className="submenu-link">
                      Chatbox
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="ui-widgets-pricing.html" className="submenu-link">
                      Pricing
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="ui-widgets-todolist.html" className="submenu-link">
                      To-do List
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-egg-fill"></i>
                  <span>Icons</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a
                      href="ui-icons-bootstrap-icons.html"
                      className="submenu-link"
                    >
                      Bootstrap Icons{" "}
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="ui-icons-fontawesome.html"
                      className="submenu-link"
                    >
                      Fontawesome
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="ui-icons-dripicons.html" className="submenu-link">
                      Dripicons
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-bar-chart-fill"></i>
                  <span>Charts</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="ui-chart-chartjs.html" className="submenu-link">
                      ChartJS
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="ui-chart-apexcharts.html" className="submenu-link">
                      Apexcharts
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  ">
                <a href="ui-file-uploader.html" className="sidebar-link">
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                  <span>File Uploader</span>
                </a>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-map-fill"></i>
                  <span>Maps</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="ui-map-google-map.html" className="submenu-link">
                      Google Map
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="ui-map-jsvectormap.html" className="submenu-link">
                      JS Vector Map
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-three-dots"></i>
                  <span>Multi-level Menu</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  has-sub">
                    <a href="#" className="submenu-link">
                      First Level
                    </a>

                    <ul className="submenu submenu-level-2 ">
                      <li className="submenu-item ">
                        <a
                          href="ui-multi-level-menu.html"
                          className="submenu-link"
                        >
                          Second Level
                        </a>
                      </li>

                      <li className="submenu-item ">
                        <a href="#" className="submenu-link">
                          Second Level Menu
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="submenu-item  has-sub">
                    <a href="#" className="submenu-link">
                      Another Menu
                    </a>

                    <ul className="submenu submenu-level-2 ">
                      <li className="submenu-item ">
                        <a href="#" className="submenu-link">
                          Second Level Menu
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="sidebar-title">Pages</li>

              <li className="sidebar-item  ">
                <a href="application-email.html" className="sidebar-link">
                  <i className="bi bi-envelope-fill"></i>
                  <span>Email Application</span>
                </a>
              </li>

              <li className="sidebar-item  ">
                <a href="application-chat.html" className="sidebar-link">
                  <i className="bi bi-chat-dots-fill"></i>
                  <span>Chat Application</span>
                </a>
              </li>

              <li className="sidebar-item  ">
                <a href="application-gallery.html" className="sidebar-link">
                  <i className="bi bi-image-fill"></i>
                  <span>Photo Gallery</span>
                </a>
              </li>

              <li className="sidebar-item  ">
                <a href="application-checkout.html" className="sidebar-link">
                  <i className="bi bi-basket-fill"></i>
                  <span>Checkout Page</span>
                </a>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-person-circle"></i>
                  <span>Account</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="account-profile.html" className="submenu-link">
                      Profile
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="account-security.html" className="submenu-link">
                      Security
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-person-badge-fill"></i>
                  <span>Authentication</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="auth-login.html" className="submenu-link">
                      Login
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="auth-register.html" className="submenu-link">
                      Register
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a
                      href="auth-forgot-password.html"
                      className="submenu-link"
                    >
                      Forgot Password
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  has-sub">
                <a href="#" className="sidebar-link">
                  <i className="bi bi-x-octagon-fill"></i>
                  <span>Errors</span>
                </a>

                <ul className="submenu ">
                  <li className="submenu-item  ">
                    <a href="error-403.html" className="submenu-link">
                      403
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="error-404.html" className="submenu-link">
                      404
                    </a>
                  </li>

                  <li className="submenu-item  ">
                    <a href="error-500.html" className="submenu-link">
                      500
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-title">Raise Support</li>

              <li className="sidebar-item  ">
                <a
                  href="https://zuramai.github.io/mazer/docs"
                  className="sidebar-link"
                >
                  <i className="bi bi-life-preserver"></i>
                  <span>Documentation</span>
                </a>
              </li>

              <li className="sidebar-item  ">
                <a
                  href="https://github.com/zuramai/mazer/blob/main/CONTRIBUTING.md"
                  className="sidebar-link"
                >
                  <i className="bi bi-puzzle"></i>
                  <span>Contribute</span>
                </a>
              </li>

              <li className="sidebar-item  ">
                <a
                  href="https://github.com/zuramai/mazer#donation"
                  className="sidebar-link"
                >
                  <i className="bi bi-cash"></i>
                  <span>Donate</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
