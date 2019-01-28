jQuery(function ($) {
  var wrapper = $('#wrapper')
  var main = $('#main-part')
  var sidebar = $('#main-sidebar')

  var mainWrapperCollapsedClasses = 'main col-xs-12 sidebar-collapsed'
  var mainWrapperExpandedClasses = 'main col-xs-9 col-xs-offset-3 col-md-10 col-md-offset-2'

  sidebar.removeClass('hidden-xs col-xs-3 col-md-2 sidebar')
  wrapper.removeClass('sidebar-minimized')
  main
    .removeClass(mainWrapperCollapsedClasses)
    .removeClass(mainWrapperExpandedClasses)

  // Sidebar nav toggle functionality
  $('#sidebar-toggle').on('click', function () {

    wrapper.toggleClass('sidebar-opened')
    sidebar.toggleClass('hidden-xs')
    wrapper.removeClass('sidebar-minimized')
    main
      .removeClass(mainWrapperCollapsedClasses)
      .removeClass(mainWrapperExpandedClasses)
  })


})
