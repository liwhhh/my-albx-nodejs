const express = require('express');
const router = express.Router();
const settingsController = require('../03-controller/settings.js');


router.get('/nav-menus.html', settingsController.getNavMenusPage);
router.get('/slides.html', settingsController.getSlidesPage);
router.get('/settings.html', settingsController.getSettingsPage);

module.exports = router;