<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>

<div id="page">

  <header class="header" id="header" role="banner">

    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
      <div class="header__name-and-slogan" id="name-and-slogan">
        <?php if ($site_name): ?>
          <h1 class="header__site-name" id="samhsa-logo">
            <a href="/" title="<?php print t('Home'); ?>" class="header__site-link" rel="home">
              <img src="/sites/sharp.edc.org/themes/sharp_zen/images/swirl.png">
            </a>
          </h1>
          
          <div id="site-name"><?php print $site_name; ?></div>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <?php if ($secondary_menu): ?>
      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <?php print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array('links', 'inline', 'clearfix'),
          ),
          'heading' => array(
            'text' => $secondary_menu_heading,
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php print render($page['header']); ?>

  </header>

  <div id="main">

    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>
      <?php print $breadcrumb; ?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>

    <div id="navigation">

      <?php if ($main_menu): ?>
        <nav id="main-menu" role="navigation" tabindex="-1">
          <?php
          // This code snippet is hard to modify. We recommend turning off the
          // "Main menu" on your sub-theme's settings form, deleting this PHP
          // code block, and, instead, using the "Menu block" module.
          // @see https://drupal.org/project/menu_block
          print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'class' => array('links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
        </nav>
      <?php endif; ?>

      <?php print render($page['navigation']); ?>

    </div>

    <?php
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
    ?>

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        <?php print $sidebar_first; ?>
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>

  </div>

  <?php print render($page['footer']); ?>
  
  <div id="samhsa-footer">
   
    <div id="samhsa-fourpoints">
      <ul>
        <li>Behavioral Health is Essential to Health</li>
        <li>Prevention Works </li>
        <li>Treatment is Effective</li>
        <li>People Recover</li>
      </ul>
    </div>

    <div id="samhsa-links">
      
      <!--
      <div class="col col-1">
        <ul id="footerSAMHSALinks" class="footerSiteNav">
          <li><a href="/">Home</a></li>
          <li><a href="http://www.samhsa.gov/about/contactUs.aspx">Contact Us</a></li>
          <li><a href="http://www.samhsa.gov/about/508.aspx" target="_blank">Accessibility</a></li>
          <li><a href="http://www.samhsa.gov/privacy.aspx" target="_blank">Privacy</a></li>
          <li><a href="http://www.samhsa.gov/about/Disclaimer.aspx" target="_blank">Disclaimer</a></li>
          <li><a href="http://www.samhsa.gov/foia/" target="_blank">FOIA</a></li>
          <li><a href="http://www.samhsa.gov/sitemap.aspx"><em>Site Map</em></a></li>
        </ul>
      </div>
      <div class="col col-2">
        <ul id="footerGovtLinks" class="footerSiteNav">
          <li><a href="http://www.whitehouse.gov/" target="_blank" class="ext">The White House</a><span class="ext"></span></li>
          <li><a href="http://www.hhs.gov/" target="_blank" class="ext">HHS.gov</a><span class="ext"></span></li>
          <li><a href="http://www.usa.gov/" target="_blank" class="ext">USA.gov</a><span class="ext"></span></li>
          <li><a href="http://www.grants.gov/" target="_blank" class="ext">Grants.gov</a><span class="ext"></span></li>
        </ul>
      </div>
      <div class="col col-3">
        <a href="http://www.samhsa.gov/IT/plugins.aspx" target="_blank">Adobe&trade; PDF and MS Office&trade; formatted files require software viewer programs to properly read them. Click here to download these FREE programs now.</a>
      </div>
      <div class="col col-4">
        <strong>Connect with SAMHSA</strong><br>
        <a href="http://www.samhsa.gov/rss/"><img src="/sites/sharp.edc.org/themes/sharp_zen/images/rss_32.png" width="32" height="32" alt="Link to RSS Feeds"></a>
        <a href="http://blog.samhsa.gov/"><img src="/sites/sharp.edc.org/themes/sharp_zen/images/blogIcon32x32_v2.png" width="32" height="32" alt="Link to SAMHSA's Blog, the SAMHSA Dialogue"></a><br>
        <a href="http://www.facebook.com/samhsa"><img src="/sites/sharp.edc.org/themes/sharp_zen/images/facebook_32.png" width="32" height="32" alt="Link to Facebook"></a>&nbsp;
        <a href="http://twitter.com/samhsagov"><img src="/sites/sharp.edc.org/themes/sharp_zen/images/twitter_32.png" width="32" height="32" alt="Link to Twitter"></a>&nbsp;
        <a href="http://www.youtube.com/user/SAMHSA"><img src="/sites/sharp.edc.org/themes/sharp_zen/images/youtube_32.png" width="32" height="32" alt="Link to Youtube"></a>&nbsp;
        <a href="http://www.flickr.com/photos/samhsa/"><img src="/sites/sharp.edc.org/themes/sharp_zen/images/flickr_32.png" width="32" height="32" alt="SAMHSA's Flickr"></a>&nbsp;
      </div>
      <div class="col col-5">
        <a href="http://www.hhs.gov/"><img src="/sites/sharp.edc.org/themes/sharp_zen/images/hhsLogoBlackTransparent.png" width="107" height="114" alt="Health and Human Services Logo"></a>
      </div>-->
      
      
    </div>
    
    <div id="samhsa-bottom">
      <div id="mission-statement">SAMHSA's Center for the Application of Prevention Technologies</div>
      <div id="contact-info">Education Development Center, Inc. &bull; 43 Foundry Ave. &bull; Waltham, MA 02453 &bull; http://captus.samhsa.gov</div>
      </div>
    </div>
  
  </div>

</div>

<?php print render($page['bottom']); ?>
