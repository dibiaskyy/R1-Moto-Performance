-- R1 Moto Performance Database Schema & Seed Data
-- Database: r1_moto_performance

USE `r1_moto_performance`;

SET FOREIGN_KEY_CHECKS = 0;

-- 1. users
DROP TABLE IF EXISTS `sessions`;
DROP TABLE IF EXISTS `password_reset_tokens`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('customer','dealer','admin') NOT NULL DEFAULT 'customer',
  `motorcycle_model_id` bigint(20) UNSIGNED DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. categories
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL UNIQUE,
  `description` text DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. motorcycle_models
DROP TABLE IF EXISTS `motorcycle_models`;
CREATE TABLE `motorcycle_models` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) NOT NULL,
  `model_name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL UNIQUE,
  `engine_displacement` varchar(255) DEFAULT NULL,
  `year_range` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `is_popular` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. products
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `sku` varchar(255) NOT NULL UNIQUE,
  `slug` varchar(255) NOT NULL UNIQUE,
  `summary` text DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `key_features` json DEFAULT NULL,
  `specs` json DEFAULT NULL,
  `suggested_retail_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `dealer_wholesale_price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `primary_image` varchar(255) DEFAULT NULL,
  `gallery_images` json DEFAULT NULL,
  `stock_quantity` int(11) NOT NULL DEFAULT 0,
  `stock_status` varchar(255) NOT NULL DEFAULT 'in_stock',
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_category_id_foreign` (`category_id`),
  CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. motorcycle_model_product (Compatibility Pivot)
DROP TABLE IF EXISTS `motorcycle_model_product`;
CREATE TABLE `motorcycle_model_product` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `motorcycle_model_id` bigint(20) UNSIGNED NOT NULL,
  `fitment_notes` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `prod_model_unique` (`product_id`,`motorcycle_model_id`),
  KEY `mmp_model_foreign` (`motorcycle_model_id`),
  CONSTRAINT `mmp_product_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `mmp_model_foreign` FOREIGN KEY (`motorcycle_model_id`) REFERENCES `motorcycle_models` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. dealer_applications
DROP TABLE IF EXISTS `dealer_applications`;
CREATE TABLE `dealer_applications` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `application_reference_no` varchar(255) NOT NULL UNIQUE,
  `business_name` varchar(255) NOT NULL,
  `owner_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `business_address` text NOT NULL,
  `city` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `years_in_business` varchar(255) DEFAULT NULL,
  `facebook_page` varchar(255) DEFAULT NULL,
  `status` enum('pending','under_review','approved','rejected') NOT NULL DEFAULT 'pending',
  `admin_remarks` text DEFAULT NULL,
  `reviewed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `da_user_foreign` (`user_id`),
  CONSTRAINT `da_user_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. dealer_documents
DROP TABLE IF EXISTS `dealer_documents`;
CREATE TABLE `dealer_documents` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `dealer_application_id` bigint(20) UNSIGNED NOT NULL,
  `document_type` varchar(255) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `mime_type` varchar(255) NOT NULL,
  `file_size` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dd_application_foreign` (`dealer_application_id`),
  CONSTRAINT `dd_application_foreign` FOREIGN KEY (`dealer_application_id`) REFERENCES `dealer_applications` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. dealer_orders
DROP TABLE IF EXISTS `dealer_orders`;
CREATE TABLE `dealer_orders` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_reference_no` varchar(255) NOT NULL UNIQUE,
  `dealer_application_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `subtotal` decimal(12,2) NOT NULL DEFAULT 0.00,
  `discount_amount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `total_amount` decimal(12,2) NOT NULL DEFAULT 0.00,
  `pdf_file_path` varchar(255) DEFAULT NULL,
  `status` enum('pending','confirmed','processing','completed','cancelled') NOT NULL DEFAULT 'pending',
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `do_application_foreign` (`dealer_application_id`),
  KEY `do_user_foreign` (`user_id`),
  CONSTRAINT `do_application_foreign` FOREIGN KEY (`dealer_application_id`) REFERENCES `dealer_applications` (`id`) ON DELETE SET NULL,
  CONSTRAINT `do_user_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. dealer_order_items
DROP TABLE IF EXISTS `dealer_order_items`;
CREATE TABLE `dealer_order_items` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `dealer_order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_sku` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_wholesale_price` decimal(10,2) NOT NULL,
  `subtotal` decimal(12,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `doi_order_foreign` (`dealer_order_id`),
  KEY `doi_product_foreign` (`product_id`),
  CONSTRAINT `doi_order_foreign` FOREIGN KEY (`dealer_order_id`) REFERENCES `dealer_orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `doi_product_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. careers & career_applications
DROP TABLE IF EXISTS `career_applications`;
DROP TABLE IF EXISTS `careers`;

CREATE TABLE `careers` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL UNIQUE,
  `department` varchar(255) NOT NULL,
  `employment_type` varchar(255) NOT NULL DEFAULT 'Full-Time',
  `location` varchar(255) NOT NULL DEFAULT 'Quezon City, Philippines',
  `summary` text NOT NULL,
  `description` longtext NOT NULL,
  `requirements` json DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `career_applications` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `career_id` bigint(20) UNSIGNED NOT NULL,
  `applicant_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `resume_path` varchar(255) NOT NULL,
  `cover_letter` text DEFAULT NULL,
  `status` enum('received','reviewed','interviewed','offered','rejected') NOT NULL DEFAULT 'received',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ca_career_foreign` (`career_id`),
  CONSTRAINT `ca_career_foreign` FOREIGN KEY (`career_id`) REFERENCES `careers` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. contact_inquiries
DROP TABLE IF EXISTS `contact_inquiries`;
CREATE TABLE `contact_inquiries` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `subject_type` enum('general','dealership_inquiry','technical_support','warranty','other') NOT NULL DEFAULT 'general',
  `message` text NOT NULL,
  `status` enum('unread','read','responded','archived') NOT NULL DEFAULT 'unread',
  `admin_reply_notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 12. personal_access_tokens (Laravel Sanctum)
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL UNIQUE,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;

-- SEED DATA

-- Users (password is 'password' hashed via bcrypt: $2y$12$K1vGkZ6Lz6kK0yE6u9jUxeE.yvGqR2W7WzH.Gf9h6x4cQ2u.kQ.XW)
INSERT INTO `users` (`id`, `name`, `email`, `phone`, `password`, `role`, `motorcycle_model_id`, `email_verified_at`, `created_at`, `updated_at`) VALUES
(1, 'R1 Master Administrator', 'admin@r1moto.com', '+63 917 123 4567', '$2y$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', NULL, NOW(), NOW(), NOW()),
(2, 'SpeedZone Moto Parts (Authorized Dealer)', 'dealer@r1moto.com', '+63 928 987 6543', '$2y$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'dealer', NULL, NOW(), NOW(), NOW()),
(3, 'Juan Dela Cruz (Aerox 155 Rider)', 'rider@r1moto.com', '+63 905 555 1234', '$2y$12$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'customer', 1, NOW(), NOW(), NOW());

-- Categories
INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `icon`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'CVT Transmission', 'cvt-transmission', 'High-performance CNC variators, lightweight clutch bells, and Kevlar lining assemblies.', 'Layers', 1, NOW(), NOW()),
(2, 'CVT Tuning & Rollers', 'cvt-tuning', 'Engineered flyball rollers, progressive torque springs, and high-temp slider pieces.', 'Zap', 1, NOW(), NOW()),
(3, 'Braking & Control', 'braking-control', 'Ceramic copper sintered disc brake pads and high-friction shoes for stopping power.', 'ShieldCheck', 1, NOW(), NOW()),
(4, 'Maintenance & Fluids', 'maintenance', 'Aerosol CVT degreasers, multi-viscosity hydraulic fork suspension oils, and synthetic racing lubricants.', 'Flame', 1, NOW(), NOW());

-- Motorcycle Models
INSERT INTO `motorcycle_models` (`id`, `brand`, `model_name`, `slug`, `engine_displacement`, `year_range`, `image_path`, `is_popular`, `created_at`, `updated_at`) VALUES
(1, 'Yamaha', 'Aerox 155', 'yamaha-aerox-155', '155cc', '2017 - Present (V1 & V2 Connected)', '/images/bikes/aerox155.png', 1, NOW(), NOW()),
(2, 'Yamaha', 'NMAX 155', 'yamaha-nmax-155', '155cc', '2015 - Present (V1 & V2)', '/images/bikes/nmax155.png', 1, NOW(), NOW()),
(3, 'Yamaha', 'Mio i 125 (M3)', 'yamaha-mio-i-125-m3', '125cc', '2015 - 2024', '/images/bikes/mio125.png', 1, NOW(), NOW()),
(4, 'Yamaha', 'Mio Gravis 125', 'yamaha-mio-gravis-125', '125cc', '2019 - Present', '/images/bikes/gravis.png', 0, NOW(), NOW()),
(5, 'Honda', 'Click 125i', 'honda-click-125i', '125cc', '2015 - Present (V1, V2, V3)', '/images/bikes/click125.png', 1, NOW(), NOW()),
(6, 'Honda', 'Click 150i', 'honda-click-150i', '150cc', '2018 - 2022', '/images/bikes/click150.png', 1, NOW(), NOW()),
(7, 'Honda', 'Click 160', 'honda-click-160', '157cc', '2022 - Present', '/images/bikes/click160.png', 1, NOW(), NOW()),
(8, 'Honda', 'PCX 160', 'honda-pcx-160', '157cc', '2021 - Present (CBS & ABS)', '/images/bikes/pcx160.png', 1, NOW(), NOW()),
(9, 'Honda', 'ADV 160', 'honda-adv-160', '157cc', '2022 - Present', '/images/bikes/adv160.png', 1, NOW(), NOW()),
(10, 'Honda', 'ADV 150', 'honda-adv-150', '149cc', '2019 - 2022', '/images/bikes/adv150.png', 0, NOW(), NOW()),
(11, 'Honda', 'Beat-Fi', 'honda-beat-fi', '110cc', '2015 - Present (Gen 1 & Gen 2 eSP)', '/images/bikes/beat.png', 1, NOW(), NOW()),
(12, 'Honda', 'Genio 110', 'honda-genio-110', '110cc', '2019 - Present', '/images/bikes/genio.png', 0, NOW(), NOW());

-- Products
INSERT INTO `products` (`id`, `category_id`, `name`, `sku`, `slug`, `summary`, `description`, `key_features`, `specs`, `suggested_retail_price`, `dealer_wholesale_price`, `primary_image`, `stock_quantity`, `stock_status`, `is_featured`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 1, 'R1 Pulley Set (Click 125)', 'R1-PULLEY-Y-CLK', 'r1-pulley-set-click-125', 'High-performance variator pulley set engineered for Yamaha Click 125 for smooth power delivery.', 'CNC-machined aluminum alloy variator assembly with optimized ramp angles and precision cooling air fins.', '["Precision Machined Variator", "Optimized Ramp Angles", "Direct Bolt-On Replacement", "Consistent Belt Grip"]', '{"Material": "Aerospace Billet Aluminum", "Ramp Angle": "13.8 Degrees", "Finish": "Hard Anodized Low-Friction"}', 2000.00, 1400.00, '/images/products/pulley-set.png', 150, 'in_stock', 1, 1, NOW(), NOW()),
(2, 1, 'R1 Pulley Set (NMAX / Aerox 155)', 'R1-PULLEY-Y-NMAX', 'r1-pulley-set-nmax-aerox-155', 'Performance pulley set designed specifically for Yamaha NMAX 155 and Aerox 155.', 'Maximizes acceleration and top-end speed with precision belt travel.', '["Precision Machined Variator", "Optimized Ramp Angles", "Direct Bolt-On Replacement", "Consistent Belt Grip"]', '{"Material": "Aerospace Billet Aluminum", "Ramp Angle": "14.0 Degrees"}', 2200.00, 1550.00, '/images/products/pulley-set.png', 120, 'in_stock', 1, 1, NOW(), NOW()),
(3, 1, 'R1 Clutch Bell (Aerox 155)', 'R1-BELL-Y-AER', 'r1-clutch-bell-aerox-155', 'Lightweight performance clutch bell engineered to eliminate clutch dragging and reduce rotating mass.', 'Features heat dissipation perimeter venting and linear inner friction grooves.', '["Lightweight Outer Shell", "Perimeter Cooling Vents", "Anti-Vibration Ring", "Direct Fit"]', '{"Material": "Dynamic Carbon Steel", "Outer Diameter": "125mm"}', 1800.00, 1250.00, '/images/products/bell.png', 85, 'in_stock', 1, 1, NOW(), NOW()),
(4, 1, 'R1 Clutch Bell (NMAX 155)', 'R1-BELL-Y-NMAX', 'r1-clutch-bell-nmax-155', 'Precision balanced clutch outer bell for Yamaha NMAX 155.', 'Provides instant bite and eliminates low RPM shudder.', '["Lightweight Outer Shell", "Perimeter Cooling Vents", "Anti-Vibration Ring", "Direct Fit"]', '{"Material": "Dynamic Carbon Steel", "Outer Diameter": "125mm"}', 1800.00, 1250.00, '/images/products/bell.png', 90, 'in_stock', 1, 1, NOW(), NOW()),
(5, 1, 'R1 Clutch Bell (Click 125)', 'R1-BELL-H-CLK', 'r1-clutch-bell-click-125', 'Heavy-duty lightweight clutch bell for Honda Click 125.', 'Improves stop-and-go throttle responsiveness.', '["Lightweight Outer Shell", "Perimeter Cooling Vents", "Anti-Vibration Ring", "Direct Fit"]', '{"Material": "Dynamic Carbon Steel", "Outer Diameter": "125mm"}', 1700.00, 1190.00, '/images/products/bell.png', 75, 'in_stock', 1, 1, NOW(), NOW()),
(6, 1, 'R1 Clutch Lining Assembly (Aerox / NMAX 155)', 'R1-LINING-Y-155', 'r1-clutch-lining-aerox-nmax-155', 'Kevlar-copper composite clutch shoe assembly engineered to resist glazing and overheating.', 'High-friction Kevlar pads provide zero slip under high-RPM aggressive launching.', '["Kevlar-Reinforced Shoes", "High Temperature Resistance", "Even Weight Distribution", "Smooth Take-Off"]', '{"Friction Compound": "Copper-Kevlar Sintered Matrix"}', 1950.00, 1360.00, '/images/products/clutch-lining.png', 95, 'in_stock', 1, 1, NOW(), NOW()),
(7, 1, 'R1 Clutch Lining Assembly (Click 125 / 150)', 'R1-LINING-H-CLK', 'r1-clutch-lining-click-125-150', 'High-friction Kevlar clutch shoe assembly designed for Honda Click scooters.', 'Zero-drag engagement with extended lifespan.', '["Kevlar-Reinforced Shoes", "High Temperature Resistance", "Even Weight Distribution", "Smooth Take-Off"]', '{"Friction Compound": "Copper-Kevlar Sintered Matrix"}', 1850.00, 1290.00, '/images/products/clutch-lining.png', 110, 'in_stock', 1, 1, NOW(), NOW()),
(8, 2, 'R1 Performance Flyball Roller Weights (Set of 6)', 'R1-FLYBALL-SET', 'r1-performance-flyball-roller-weights-set-of-6', 'Precision balanced brass-core roller weights with wear-resistant self-lubricating nylon sleeve.', 'Available in calibrated weights from 8g to 14g for tailored low-end punch or top-end touring.', '["Self-Lubricating Nylon Sleeve", "Solid Brass Core", "Zero Flat-Spot Wear", "6 Pieces Per Set"]', '{"Core": "Brass", "Sleeve": "PA66 Polyamide Nylon"}', 380.00, 240.00, '/images/products/flyball.png', 250, 'in_stock', 1, 1, NOW(), NOW()),
(9, 2, 'R1 High-Temp Slider Pieces (Set of 3)', 'R1-SLIDER-SET', 'r1-high-temp-slider-pieces-set-of-3', 'Heat-stabilized guide ramp slider pieces preventing variator ramp play.', 'Resists heat deformation up to 260°C.', '["Engineered Polymer Compound", "Resists High Temperature Play", "Silky Smooth Ramp Travel", "Set of 3"]', '{"Material": "Virgin High-Temp Polymer"}', 150.00, 95.00, '/images/products/slider-piece.png', 300, 'in_stock', 0, 1, NOW(), NOW()),
(10, 2, 'R1 Torque Drive Assembly', 'R1-TORQUE-DRIVE-ALL', 'r1-torque-drive-assembly', 'Dual-angle straight-groove performance torque cam for linear belt shifting.', 'Eliminates lag during corner exits and steep incline climbs.', '["Dual-Angle Cam Grooves", "Low-Friction Pin Travel", "Hardened Steel Flanges", "Includes High-Temp Seals"]', '{"Material": "High-Hardness Alloy Steel"}', 2400.00, 1680.00, '/images/products/torque-drive.png', 45, 'in_stock', 1, 1, NOW(), NOW()),
(11, 2, 'R1 Clutch Spring Tuning Set (1000RPM / 1500RPM)', 'R1-CLUTCH-SPRING-SET', 'r1-clutch-spring-tuning-set', 'Calibrated clutch shoe return springs for crisp RPM launch engagement.', 'Silicon-chromium wire with anti-fatigue coating.', '["Silicon Chrome Wire", "Resists Heat Fatigue", "Prevents Early Clutch Drag", "Pack of 3"]', '{"Rating": "1000RPM / 1500RPM"}', 280.00, 180.00, '/images/products/clutch-spring.png', 180, 'in_stock', 0, 1, NOW(), NOW()),
(12, 2, 'R1 Center Spring (All Models)', 'R1-CENTER-SPRING-ALL', 'r1-center-spring-all-models', 'Rear pulley torque spring maintaining consistent belt grip and crisp downshifting.', 'Provides firm rear pulley back-pressure to eliminate belt slippage.', '["Fatigue-Resistant Steel", "Maintains Consistent Belt Tension", "Prevents Belt Slip On Acceleration", "Direct Replacement"]', '{"Material": "Silicon-Chromium Alloy Spring Steel", "Rating": "1000RPM / 1500RPM"}', 450.00, 310.00, '/images/products/center-spring.png', 140, 'in_stock', 1, 1, NOW(), NOW()),
(13, 4, 'R1 CVT Cleaner (450ml)', 'R1-CVT-CLEANER', 'r1-cvt-cleaner-450ml', 'Fast-acting degreaser formulated to remove rubber belt dust, clutch glazing, and oil deposits.', 'Dries rapidly without residue and safe on oil seals.', '["Aerosol High-Pressure Blast", "Instant Evaporation", "Safe on Rubber Seals", "Restores Belt Traction"]', '{"Volume": "450ml", "Can Type": "Pressurized Aerosol"}', 120.00, 80.00, '/images/products/cvt-cleaner.png', 500, 'in_stock', 0, 1, NOW(), NOW()),
(14, 3, 'R1 Ceramic Disc Brake Pad (Aerox / NMAX / Click)', 'R1-BRAKEPAD-CERAMIC', 'r1-ceramic-disc-brake-pad', 'Ceramic-copper composite disc brake pad providing maximum stopping power with zero rotor scoring.', 'Zero brake squeal under all-weather tropical conditions.', '["Ceramic Composite Friction Compound", "Zero Brake Noise", "Extended Rotor Lifespan", "Heat Fade Resistant"]', '{"Compound": "Ceramic Copper Matrix"}', 350.00, 220.00, '/images/products/brakepad.png', 220, 'in_stock', 1, 1, NOW(), NOW()),
(15, 4, 'R1 Performance Hydraulic Fork Suspension Oil (200ml)', 'R1-FORK-OIL-200ML', 'r1-performance-hydraulic-fork-suspension-oil-200ml', 'High-viscosity index anti-foaming hydraulic fork oil engineered for front telescopic forks.', 'Prevents bottoming out under aggressive braking and cornering.', '["Anti-Foaming Formula", "Shear-Stable Viscosity", "Anti-Wear Protection", "Thermal Stability"]', '{"Volume": "200ml", "Rating": "ISO 32 Fork Spec"}', 90.00, 60.00, '/images/products/fork-oil.png', 350, 'in_stock', 0, 1, NOW(), NOW());

-- Compatibility Pivot Links (Motorcycle Model to Product)
INSERT IGNORE INTO `motorcycle_model_product` (`product_id`, `motorcycle_model_id`, `fitment_notes`, `created_at`, `updated_at`) VALUES
(1, 5, 'Direct Bolt-On (Click 125i V1, V2, V3)', NOW(), NOW()),
(1, 6, 'Direct Fit with stock belt', NOW(), NOW()),
(2, 1, 'Direct Bolt-On (Aerox 155 V1 & V2)', NOW(), NOW()),
(2, 2, 'Direct Bolt-On (NMAX 155 V1 & V2)', NOW(), NOW()),
(3, 1, 'Direct Bolt-On (Aerox 155 V1 & V2)', NOW(), NOW()),
(4, 2, 'Direct Bolt-On (NMAX 155 V1 & V2)', NOW(), NOW()),
(5, 5, 'Direct Bolt-On (Click 125i)', NOW(), NOW()),
(5, 6, 'Direct Bolt-On (Click 150i)', NOW(), NOW()),
(6, 1, 'Direct Fit (Aerox 155 V1 & V2)', NOW(), NOW()),
(6, 2, 'Direct Fit (NMAX 155 V1 & V2)', NOW(), NOW()),
(7, 5, 'Direct Fit (Click 125i)', NOW(), NOW()),
(7, 6, 'Direct Fit (Click 150i)', NOW(), NOW()),
(7, 7, 'Direct Fit (Click 160)', NOW(), NOW()),
(8, 1, 'Compatible with all 20x12 roller sizes', NOW(), NOW()),
(8, 2, 'Compatible with all 20x12 roller sizes', NOW(), NOW()),
(8, 5, 'Compatible with all 20x15 roller sizes', NOW(), NOW()),
(8, 6, 'Compatible with all 20x15 roller sizes', NOW(), NOW()),
(9, 1, 'Fits Yamaha 155 Variator Ramp Plate', NOW(), NOW()),
(9, 2, 'Fits Yamaha 155 Variator Ramp Plate', NOW(), NOW()),
(9, 5, 'Fits Honda Click Variator Ramp Plate', NOW(), NOW()),
(10, 1, 'Compatible with Aerox 155 rear pulley', NOW(), NOW()),
(10, 2, 'Compatible with NMAX 155 rear pulley', NOW(), NOW()),
(11, 1, 'Compatible with 125mm clutch assemblies', NOW(), NOW()),
(11, 2, 'Compatible with 125mm clutch assemblies', NOW(), NOW()),
(11, 5, 'Compatible with 125mm clutch assemblies', NOW(), NOW()),
(12, 1, 'Universal fit for Aerox 155 rear pulley', NOW(), NOW()),
(12, 2, 'Universal fit for NMAX 155 rear pulley', NOW(), NOW()),
(12, 5, 'Universal fit for Click 125i rear pulley', NOW(), NOW()),
(12, 6, 'Universal fit for Click 150i rear pulley', NOW(), NOW()),
(13, 1, 'Universal for all scooter transmission cases', NOW(), NOW()),
(13, 5, 'Universal for all scooter transmission cases', NOW(), NOW()),
(14, 1, 'Front caliper direct replacement', NOW(), NOW()),
(14, 2, 'Front caliper direct replacement', NOW(), NOW()),
(14, 5, 'Front caliper direct replacement', NOW(), NOW()),
(15, 1, 'Universal front telescopic suspension fluid', NOW(), NOW()),
(15, 5, 'Universal front telescopic suspension fluid', NOW(), NOW());
