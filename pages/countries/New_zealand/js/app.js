/* ==========================================================================
   New Zealand Vesti JavaScript Logic
   Powers the interactive modules, calculators, AI chat, and PDF Wizard
   ========================================================================== */

// Safe wrapper for Lucide icons initialization
const safeCreateIcons = () => {
    if (typeof lucide !== 'undefined') {
        try {
            lucide.createIcons();
        } catch (e) {
            console.error("Lucide icons rendering failed:", e);
        }
    }
};

window.openEligibilityModal = () => {
    const eligibilityModal = document.getElementById('eligibility-modal');
    const eligStep1 = document.getElementById('elig-step-1');
    const eligStep2 = document.getElementById('elig-step-2');
    const eligStep3 = document.getElementById('elig-step-3');
    const eligStepText = document.getElementById('elig-step-text');
    if (eligibilityModal) {
        eligibilityModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Reset modal to Step 1 state
        if (eligStep1) eligStep1.style.display = 'block';
        if (eligStep2) eligStep2.style.display = 'none';
        if (eligStep3) eligStep3.style.display = 'none';
        if (eligStepText) eligStepText.innerText = 'Step 1 of 3';
        
        // Reset progress bar dots & lines
        const d1 = document.getElementById('elig-dot-1');
        const d2 = document.getElementById('elig-dot-2');
        const d3 = document.getElementById('elig-dot-3');
        const l1 = document.getElementById('elig-line-1');
        const l2 = document.getElementById('elig-line-2');
        if (d1) d1.classList.add('active');
        if (d2) d2.classList.remove('active');
        if (d3) d3.classList.remove('active');
        if (l1) l1.classList.remove('active');
        if (l2) l2.classList.remove('active');
    }
};

window.closeEligibilityModal = () => {
    const eligibilityModal = document.getElementById('eligibility-modal');
    if (eligibilityModal) {
        eligibilityModal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.closeModalDirectly = () => {
    const modal = document.getElementById('pathway-modal');
    if (modal) {
        modal.classList.remove('active');
    }
    document.body.style.overflow = '';
};

window.revealBlueprintSection = (event) => {
    if (event) event.preventDefault();
    const blueprintSection = document.getElementById('blueprint');
    if (blueprintSection) {
        blueprintSection.classList.remove('d-none');
        blueprintSection.scrollIntoView({ behavior: 'smooth' });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // No-op user welcome check as requested (no session badge displayed)
    const checkHeroUserWelcome = () => {};
    window.checkHeroUserWelcome = checkHeroUserWelcome;

    // Initialize Lucide Icons
    safeCreateIcons();

    // 1. Navigation Scroll Effect & Mobile Drawer (guarded)
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Guard against missing navbar (e.g., on pages without a navigation bar)
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Guard against missing mobile menu elements
    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileDrawer.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileDrawer.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            safeCreateIcons();
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) icon.setAttribute('data-lucide', 'menu');
                safeCreateIcons();
            });
        });
    }

    // 2. Count-Up Animation for Hero Stats
    const animateValue = (id, start, end, duration, prefix = '', suffix = '') => {
        const obj = document.getElementById(id);
        if (!obj) return;
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            obj.innerHTML = prefix + value.toLocaleString() + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Trigger stats animations on loaded
    setTimeout(() => {
        animateValue('stat-migrants', 0, 15420, 2000, '', '+');
        animateValue('stat-proof', 0, 8940, 2200, '', '+');
    }, 500);

    // 3. Vesti 3D Card Interactive Click/Tap Flip
    const cardWrapper = document.getElementById('card-3d-wrapper');
    if (cardWrapper) {
        cardWrapper.addEventListener('click', () => {
            cardWrapper.classList.toggle('flipped');
        });
    }

    // 4. Visa Pathways Detailed Data & Modal System
    const pathwaysData = {
        general_visitor: {
            title: "General Visitor Visa",
            badge: "Tourism & Exploration",
            badgeClass: "gold",
            desc: "For individuals looking to explore the beautiful landscapes of New Zealand, visit friends and family, or enjoy amateur sports and adventure.",
            processingTime: "Fast Processing",
            requirements: [
                "Must be a genuine tourist with the intent to leave.",
                "Sufficient funds to support yourself during your stay.",
                "Hold an onward travel ticket.",
                "Meet health and character requirements."
            ],
            checklist: [
                "Determine the length of your stay.",
                "Gather proof of funds and onward travel.",
                "Book a Clarity Session for application guidance."
            ]
        },
        group_visitor: {
            title: "Group Visitor Visa",
            badge: "Group Travel",
            badgeClass: "purple",
            desc: "Ideal for organized tour groups traveling to New Zealand for the same purpose and with the same itinerary.",
            processingTime: "Priority Group Processing",
            requirements: [
                "Travel as a group organized by an approved travel agency.",
                "Have the same travel itinerary.",
                "Demonstrate sufficient funds for the group.",
                "Group leader must handle the application."
            ],
            checklist: [
                "Register your group with an approved agency.",
                "Compile group details and itineraries.",
                "Let Vesti handle your group's financial setup."
            ]
        },
        business_visitor: {
            title: "Business Visitor Visa",
            badge: "Corporate & Trade",
            badgeClass: "green",
            desc: "For professionals needing to visit New Zealand for short-term business activities such as meetings, conferences, or trade negotiations.",
            processingTime: "Expedited Processing",
            requirements: [
                "Purpose of visit must be strictly business-related.",
                "Cannot be employed by a New Zealand company.",
                "Sufficient funds or employer support during your stay.",
                "Onward travel arrangements."
            ],
            checklist: [
                "Obtain a letter of invitation or business mandate.",
                "Prepare proof of employment and company support.",
                "Schedule your Clarity Session for guidance."
            ]
        },
        family_visitor: {
            title: "Family/Partner Visitor Visa",
            badge: "Family Reunification",
            badgeClass: "gold",
            desc: "Designed for individuals visiting a partner, spouse, or immediate family members who are New Zealand citizens or residents.",
            processingTime: "Standard Processing",
            requirements: [
                "Proof of genuine and stable relationship to the sponsor.",
                "Sponsor must meet eligibility criteria.",
                "Meet health and character requirements.",
                "Intent to stay temporarily unless stated otherwise."
            ],
            checklist: [
                "Gather relationship evidence and sponsor documents.",
                "Ensure your sponsor completes the required forms.",
                "Review your profile in a Clarity Session."
            ]
        }
    };
    const pathwayCards = document.querySelectorAll('.pathway-card');
    const modal = document.getElementById('pathway-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBodyContent = document.getElementById('modal-body-content');

    const openPathwayModal = (pathwayKey) => {
        const data = pathwaysData[pathwayKey];
        if (!data || !modal || !modalBodyContent) return;

        modalBodyContent.innerHTML = `
            <div class="modal-body">
                <span class="modal-badge ${data.badgeClass}">${data.badge}</span>
                <h2>${data.title}</h2>
                <p class="modal-desc">${data.desc}</p>
                
                <!-- Processing time box — commented out, re-enable if needed
                <div class="modal-grid-stats">
                    <div class="modal-stat">
                        <span class="modal-stat-title"><i data-lucide="clock" class="small-icon"></i> Est. Processing Time</span>
                        <span class="modal-stat-value">${data.processingTime}</span>
                    </div>
                </div>
                -->

                <div class="modal-section">
                    <h4>📝 Primary Visa Requirements</h4>
                    <ul class="modal-list">
                        ${data.requirements.map(req => `<li><i data-lucide="check-circle"></i> <span>${req}</span></li>`).join('')}
                    </ul>
                </div>


                <div class="mt-6 text-center">
                    <a href="https://wevesti.com/clarity-session/0-1" target="_blank" rel="noopener" class="btn btn-success w-full" style="justify-content: center; padding: 14px; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                        <i data-lucide="calendar-check"></i>
                        <span>Book a Free Clarity Session</span>
                    </a>
                </div>
            </div>
        `;

        safeCreateIcons();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        if (modal) {
            modal.classList.remove('active');
        }
        document.body.style.overflow = '';
    };

    // Card click → modal disabled; "Learn Requirements" links go directly to Clarity Session
    // Re-enable below if boss wants the modal back:
    /*
    pathwayCards.forEach(card => {
        card.addEventListener('click', () => {
            const pathwayKey = card.getAttribute('data-pathway');
            openPathwayModal(pathwayKey);
        });
    });
    */

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // 5. Interactive Cost & Proof of Funds Calculator (Removed)


    // 7. Interactive Step-by-Step Blueprint Wizard
    const steps = document.querySelectorAll('.wizard-step-content');
    const progressSteps = document.querySelectorAll('.progress-step');
    const progressBarFill = document.getElementById('wizard-progress-fill');
    const wizardForm = document.getElementById('blueprint-form');
    
    const btnPrev = document.getElementById('wizard-prev');
    const btnNext = document.getElementById('wizard-next');
    const btnSubmit = document.getElementById('wizard-submit');

    const wizardContainer = document.getElementById('wizard-container');
    const blueprintResult = document.getElementById('blueprint-result');

    let currentStepIndex = 0; // 0-indexed

    const validateStep = (index) => {
        const stepElement = steps[index];
        const requiredInputs = stepElement.querySelectorAll('[required]');
        let isValid = true;
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        
        return isValid;
    };

    const updateWizardUI = () => {
        // Show/hide steps
        steps.forEach((step, idx) => {
            if (idx === currentStepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Update progress step titles
        progressSteps.forEach((step, idx) => {
            if (idx <= currentStepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Update progress line percentage
        const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;
        progressBarFill.style.width = `${progressPercent}%`;

        // Update buttons
        if (currentStepIndex === 0) {
            btnPrev.classList.add('d-none');
        } else {
            btnPrev.classList.remove('d-none');
        }

        if (currentStepIndex === steps.length - 1) {
            btnNext.classList.add('d-none');
            btnSubmit.classList.remove('d-none');
        } else {
            btnNext.classList.remove('d-none');
            btnSubmit.classList.add('d-none');
        }
    };

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (validateStep(currentStepIndex)) {
                currentStepIndex++;
                updateWizardUI();
            }
        });

        btnPrev.addEventListener('click', () => {
            if (currentStepIndex > 0) {
                currentStepIndex--;
                updateWizardUI();
            }
        });
    }

    // Global Payment Modal Actions
    const paymentModal = document.getElementById('payment-modal');
    const paymentBodyContent = document.getElementById('payment-body-content');
    const paymentSuccessMsg = document.getElementById('payment-success-msg');
    const confirmPaymentBtn = document.getElementById('confirm-payment-btn');
    const paymentClose = document.getElementById('payment-close');

    const openPaymentModal = () => {
        if (!paymentModal) return;
        paymentBodyContent.classList.remove('d-none');
        paymentSuccessMsg.classList.add('d-none');
        paymentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        safeCreateIcons();
    };

    const closePaymentModal = () => {
        if (!paymentModal) return;
        paymentModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (paymentClose) {
        paymentClose.addEventListener('click', closePaymentModal);
    }

    if (paymentModal) {
        paymentModal.addEventListener('click', (event) => {
            if (event.target === paymentModal) closePaymentModal();
        });
    }

    if (confirmPaymentBtn) {
        confirmPaymentBtn.onclick = () => {
            // Show success state
            paymentBodyContent.classList.add('d-none');
            paymentSuccessMsg.classList.remove('d-none');
            
            // Wait for 1.5s to simulate processing, then show blueprint
            setTimeout(() => {
                closePaymentModal();
                generateBlueprint();
            }, 1500);
        };
    }

    // Submit wizard and show details-submitted success (no payment)
    if (wizardForm) {
        wizardForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateStep(currentStepIndex)) return;
            generateBlueprint();
        });
    }

    const generateBlueprint = () => {
            // Extract Values
            const name = document.getElementById('bp-name').value;
            const email = document.getElementById('bp-email').value;
            const occupation = document.getElementById('bp-occupation').value;
            const origin = document.getElementById('bp-origin').value;
            const city = document.getElementById('bp-city').value;
            const pathway = document.getElementById('bp-pathway').value;
            const savings = document.getElementById('bp-savings').value;
            const timeline = document.getElementById('bp-timeline').value;
            const family = document.getElementById('bp-family').value;
            const loanInterested = document.getElementById('bp-loan-interest').checked;

            // Fill Report Data
            document.getElementById('res-name-title').innerText = name;
            document.getElementById('res-name').innerText = name;
            document.getElementById('res-occupation').innerText = occupation;
            document.getElementById('res-pathway').innerText = pathway;
            document.getElementById('res-city').innerText = city;
            document.getElementById('res-city-target').innerText = city === 'Not Sure' ? 'New Zealand' : city;
            document.getElementById('res-timeline').innerText = timeline;
            document.getElementById('res-family').innerText = family;
            document.getElementById('res-email').innerText = email;

            // Dynamic Timeline milestone headers based on selected travel date (phasing)
            const milestoneTitle1 = document.getElementById('milestone-title-1');
            const milestoneTitle2 = document.getElementById('milestone-title-2');
            const milestoneTitle3 = document.getElementById('milestone-title-3');
            const milestoneTitle4 = document.getElementById('milestone-title-4');

            if (milestoneTitle1 && milestoneTitle2 && milestoneTitle3 && milestoneTitle4) {
                if (timeline.includes('0-3 Months') || timeline.includes('Immediately')) {
                    milestoneTitle1.innerText = 'Verify Travel Documents & Plan Itinerary (Week 1)';
                    milestoneTitle2.innerText = 'Open Vesti NZ Global Wallet (Week 2)';
                    milestoneTitle3.innerText = 'Prepare Proof of Funds (Month 1)';
                    milestoneTitle4.innerText = 'Submit Visa Application & Finalize Bookings (Months 2-3)';
                } else if (timeline.includes('3-6 Months') || timeline.includes('Short-term')) {
                    milestoneTitle1.innerText = 'Verify Travel Documents & Plan Itinerary (Months 1-2)';
                    milestoneTitle2.innerText = 'Open Vesti NZ Global Wallet (Month 3)';
                    milestoneTitle3.innerText = 'Prepare Proof of Funds (Month 4)';
                    milestoneTitle4.innerText = 'Submit Visa Application & Finalize Bookings (Months 5-6)';
                } else if (timeline.includes('6-12 Months') || timeline.includes('Medium-term')) {
                    milestoneTitle1.innerText = 'Verify Travel Documents & Plan Itinerary (Months 1-3)';
                    milestoneTitle2.innerText = 'Open Vesti NZ Global Wallet (Months 4-5)';
                    milestoneTitle3.innerText = 'Prepare Proof of Funds (Months 6-8)';
                    milestoneTitle4.innerText = 'Submit Visa Application & Finalize Bookings (Months 9-12)';
                } else if (timeline.includes('1 Year+') || timeline.includes('Long-term')) {
                    milestoneTitle1.innerText = 'Verify Travel Documents & Plan Itinerary (Months 1-6)';
                    milestoneTitle2.innerText = 'Open Vesti NZ Global Wallet (Months 7-9)';
                    milestoneTitle3.innerText = 'Prepare Proof of Funds (Months 10-12)';
                    milestoneTitle4.innerText = 'Submit Visa Application & Finalize Bookings (Year 1+)';
                }
            }

            // Dynamic Report Customizations
            // Checklist occupation description
            const resOccupationText = document.getElementById('res-occupation-text');
            if (pathway.includes('general_visitor')) {
                resOccupationText.innerHTML = `As a General Visitor, prepare a robust travel itinerary, secure hotel bookings, and gather evidence of ties to your home country (such as family, employment, or property) to show intent to return. Vesti can help you set up an NZD Wallet.`;
            } else if (pathway.includes('business_visitor')) {
                resOccupationText.innerHTML = `As a Business Visitor, your activities must be strictly corporate (meetings, negotiations, or conferences). Gather an official invitation letter from the NZ host company and a company support letter.`;
            } else if (pathway.includes('family_visitor')) {
                resOccupationText.innerHTML = `For a Family or Partner Visitor Visa, compile relationship proof, sponsor invitation letters, and sponsor financial documents. Vesti can assist you in setting up NZD wallets for independent travel funds.`;
            } else if (pathway.includes('group_visitor')) {
                resOccupationText.innerHTML = `For Group Visitor Travel, compile matching itineraries, group listings, and joint financial sponsors. Ensure all group members have passports valid for at least 3 months beyond the departure date.`;
            } else {
                resOccupationText.innerHTML = `Ensure you carefully prepare your documentation according to standard guidelines. Providing clear proof of funds and correct profiles is critical to a successful application.`;
            }

            // Checklist Proof of funds description
            const resPofText = document.getElementById('res-pof-text');
            if (pathway.includes('family_visitor')) {
                resPofText.innerHTML = `For Family/Partner Visas, your sponsor can guarantee your maintenance and accommodation. Vesti can help you open an NZD account pre-arrival for independent financial flexibility.`;
            } else {
                resPofText.innerHTML = `Immigration New Zealand requires visitors to show proof of sufficient funds to support themselves (minimum $1,000 NZD per month of stay, or $400 NZD if accommodation is already prepaid). Use Vesti's certified pre-arrival Proof of Funds Certificate or wallet balance statement to satisfy this requirement seamlessly.`;
            }

            // Pre-approval Travel Loan section customization
            const resLoanSection = document.getElementById('res-loan-section');
            if (loanInterested) {
                resLoanSection.classList.remove('d-none');
                
                let loanAmt = "$6,000 NZD";
                if (savings.includes('< $5k')) loanAmt = "$3,000 NZD";
                else if (savings.includes('$5k - $15k')) loanAmt = "$6,000 NZD";
                else if (savings.includes('$15k - $30k')) loanAmt = "$10,000 NZD";
                else loanAmt = "$15,000 NZD";

                resLoanSection.innerHTML = `
                    <h5>💰 Vesti Travel Support Pre-Approval Option</h5>
                    <p>Based on your profile, you are tentatively eligible for a <strong>Vesti tourist travel bridging loan up to ${loanAmt}</strong> or a certified <strong>Proof of Funds Letter</strong> to complete your application. A travel banking specialist will reach out to <strong>${email}</strong> in the next 24 hours to finalize details.</p>
                `;
            } else {
                resLoanSection.classList.add('d-none');
            }

            // Transitions
            const blueprintSection = document.getElementById('blueprint');
            if (blueprintSection) {
                blueprintSection.classList.remove('d-none');
            }
            wizardContainer.classList.add('d-none');
            blueprintResult.classList.remove('d-none');

            // Scroll to top of results
            blueprintResult.scrollIntoView({ behavior: 'smooth' });
    };

    // Reset Wizard
    const btnResetWizard = document.getElementById('btn-reset-wizard');
    if (btnResetWizard) {
        btnResetWizard.addEventListener('click', () => {
            wizardForm.reset();
            currentStepIndex = 0;
            updateWizardUI();
            
            blueprintResult.classList.add('d-none');
            wizardContainer.classList.remove('d-none');
            wizardContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Print Blueprint Report
    const btnPrintBlueprint = document.getElementById('btn-print-blueprint');
    if (btnPrintBlueprint) {
        btnPrintBlueprint.addEventListener('click', () => {
            window.print();
        });
    }

    // ==========================================
    // 5. Eligibility Form Persistence & Analytics
    // ==========================================
    // ==========================================
    // 5. Eligibility Form Persistence, Modal System & Analytics
    // ==========================================
    const eligForm = document.getElementById('eligibility-form');
    const eligibilityModal = document.getElementById('eligibility-modal');
    const eligibilityClose = document.getElementById('eligibility-close');
    const eligBtnContinue = document.getElementById('elig-btn-continue');
    const eligBtnBack2 = document.getElementById('elig-btn-back-2');
    const eligBtnContinue2 = document.getElementById('elig-btn-continue-2');
    const eligBtnBack3 = document.getElementById('elig-btn-back-3');
    const eligStep1 = document.getElementById('elig-step-1');
    const eligStep2 = document.getElementById('elig-step-2');
    const eligStep3 = document.getElementById('elig-step-3');
    const eligStepText = document.getElementById('elig-step-text');

    // Convert 2-letter ISO country code to Flag Emoji
    function getFlagEmoji(countryCode) {
        if (!countryCode) return '';
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }

    // Custom phone country dropdown logic
    const phoneCountrySelector = document.getElementById('phone-country-selector');
    const phoneDropdownList = document.getElementById('phone-dropdown-list');
    const selectedFlagEmoji = document.getElementById('selected-flag-emoji');
    const selectedFlagCode = document.getElementById('selected-flag-code');
    const phoneField = document.getElementById('phone-field');
    const countrySelect = eligForm ? eligForm.querySelector('select[name="country"]') : null;
    const phoneItemsContainer = document.getElementById('phone-dropdown-items-container');
    const phoneDropdownSearch = document.getElementById('phone-dropdown-search');

    // Populate country dropdown select list dynamically
    if (countrySelect && typeof COUNTRIES_LIST !== 'undefined') {
        // Clear existing items (except the placeholder)
        while (countrySelect.options.length > 1) {
            countrySelect.remove(1);
        }
        const sortedCountries = [...COUNTRIES_LIST].sort((a, b) => a.name.localeCompare(b.name));
        sortedCountries.forEach(country => {
            const opt = document.createElement('option');
            opt.value = country.name;
            opt.textContent = country.name;
            countrySelect.appendChild(opt);
        });
    }

    // Populate custom phone country list dynamically
    if (phoneItemsContainer && typeof COUNTRIES_LIST !== 'undefined') {
        phoneItemsContainer.innerHTML = ''; // clear initial indicator/hardcoded
        const sortedCountries = [...COUNTRIES_LIST].sort((a, b) => a.name.localeCompare(b.name));
        sortedCountries.forEach(country => {
            const flagEmoji = getFlagEmoji(country.code);
            const item = document.createElement('div');
            item.className = 'phone-dropdown-item';
            item.setAttribute('data-code', country.code);
            item.setAttribute('data-prefix', country.dial_code);
            item.setAttribute('data-name', country.name.toLowerCase());
            
            // Layout styling for premium design
            item.style.padding = '8px 12px';
            item.style.cursor = 'pointer';
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            item.style.gap = '8px';
            item.style.fontSize = '0.9rem';
            item.style.color = '#0f172a';
            item.style.transition = 'background-color 0.2s';
            
            item.innerHTML = `<span class="item-flag" style="font-size: 1.15rem;">${flagEmoji}</span>
                              <span class="item-name" style="font-weight: 500;">${country.name}</span>
                              <span class="item-prefix" style="margin-left: auto; color: #64748b; font-size: 0.8rem; font-weight: 600;">${country.dial_code}</span>`;
            
            // Hover states
            item.addEventListener('mouseenter', () => {
                item.style.backgroundColor = '#f1f5f9';
            });
            item.addEventListener('mouseleave', () => {
                item.style.backgroundColor = 'transparent';
            });

            // Selection Event
            item.addEventListener('click', () => {
                const code = country.code;
                const prefix = country.dial_code;

                // Update flag image src (not innerText — it's an <img>)
                if (selectedFlagEmoji) {
                    selectedFlagEmoji.src = `https://flagcdn.com/24x18/${code.toLowerCase()}.png`;
                    selectedFlagEmoji.alt = code.toUpperCase();
                }
                if (selectedFlagCode) selectedFlagCode.innerText = prefix;
                
                if (phoneField) {
                    phoneField.placeholder = `${prefix}...`;
                    phoneField.value = prefix + ' ';
                    phoneField.focus();
                }

                // Sync with country dropdown select list (without re-triggering change to avoid loop)
                if (countrySelect) {
                    countrySelect.value = country.name;
                }

                phoneDropdownList.style.display = 'none';
            });

            phoneItemsContainer.appendChild(item);
        });
    }

    // Toggle dropdown
    if (phoneCountrySelector && phoneDropdownList) {
        phoneCountrySelector.addEventListener('click', (e) => {
            e.stopPropagation();
            const isShown = phoneDropdownList.style.display === 'block';
            phoneDropdownList.style.display = isShown ? 'none' : 'block';
            if (!isShown && phoneDropdownSearch) {
                phoneDropdownSearch.value = '';
                phoneDropdownSearch.dispatchEvent(new Event('input'));
                phoneDropdownSearch.focus();
            }
        });

        document.addEventListener('click', (e) => {
            if (!phoneCountrySelector.contains(e.target) && !phoneDropdownList.contains(e.target)) {
                phoneDropdownList.style.display = 'none';
            }
        });
    }

    // Search filter for phone dropdown
    if (phoneDropdownSearch && phoneItemsContainer) {
        phoneDropdownSearch.addEventListener('input', () => {
            const query = phoneDropdownSearch.value.toLowerCase().trim();
            const items = phoneItemsContainer.querySelectorAll('.phone-dropdown-item');
            items.forEach(item => {
                const name = item.getAttribute('data-name');
                const prefix = item.getAttribute('data-prefix');
                if (name.includes(query) || prefix.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Sync from country dropdown select list change -> phone selector
    if (countrySelect) {
        countrySelect.addEventListener('change', () => {
            const val = countrySelect.value;
            if (!val || typeof COUNTRIES_LIST === 'undefined') return;

            const countryData = COUNTRIES_LIST.find(c => c.name === val);
            if (countryData) {
                // Update flag image src (not innerText — it's an <img>)
                if (selectedFlagEmoji) {
                    selectedFlagEmoji.src = `https://flagcdn.com/24x18/${countryData.code.toLowerCase()}.png`;
                    selectedFlagEmoji.alt = countryData.code.toUpperCase();
                }
                if (selectedFlagCode) selectedFlagCode.innerText = countryData.dial_code;
                if (phoneField) {
                    phoneField.placeholder = `${countryData.dial_code}...`;
                    if (phoneField.value === '' || phoneField.value.startsWith('+')) {
                        phoneField.value = countryData.dial_code + ' ';
                    }
                }
            }
        });
    }

    if (eligibilityClose) {
        eligibilityClose.addEventListener('click', () => window.closeEligibilityModal());
    }

    if (eligibilityModal) {
        eligibilityModal.addEventListener('click', (e) => {
            if (e.target === eligibilityModal) {
                window.closeEligibilityModal();
            }
        });
    }

    // Step 1 validation function
    const validateEligibilityStep1 = () => {
        if (!eligStep1) return true;
        const requiredFields = eligStep1.querySelectorAll('input[required], select[required]');
        let isValid = true;
        requiredFields.forEach(field => {
            if (!field.value.trim() || (field.tagName === 'SELECT' && field.value === '')) {
                if (field.name === 'phone') {
                    field.parentElement.style.borderColor = '#ef4444';
                } else {
                    field.style.borderColor = '#ef4444';
                }
                isValid = false;
            } else {
                if (field.name === 'phone') {
                    field.parentElement.style.borderColor = '';
                } else {
                    field.style.borderColor = '';
                }
            }
        });
        return isValid;
    };

    // Step 2 validation function
    const validateEligibilityStep2 = () => {
        if (!eligStep2) return true;
        const q1Checked = eligStep2.querySelector('input[name="q1"]:checked');
        const q2Checked = eligStep2.querySelector('input[name="q2"]:checked');
        let isValid = true;
        
        // Reset borders
        const groups = eligStep2.querySelectorAll('.radio-card-group');
        groups.forEach(g => g.style.border = '');
        
        if (!q1Checked) {
            const group1 = eligStep2.querySelector('input[name="q1"]').closest('.radio-card-group');
            if (group1) group1.style.border = '1px solid #ef4444';
            isValid = false;
        }
        if (!q2Checked) {
            const group2 = eligStep2.querySelector('input[name="q2"]').closest('.radio-card-group');
            if (group2) group2.style.border = '1px solid #ef4444';
            isValid = false;
        }
        return isValid;
    };

    // Step 3 validation function
    const validateEligibilityStep3 = () => {
        if (!eligStep3) return true;
        const q3Checked = eligStep3.querySelector('input[name="q3"]:checked');
        const q4Checked = eligStep3.querySelector('input[name="q4"]:checked');
        let isValid = true;
        
        // Reset borders
        const groups = eligStep3.querySelectorAll('.radio-card-group');
        groups.forEach(g => g.style.border = '');
        
        if (!q3Checked) {
            const group3 = eligStep3.querySelector('input[name="q3"]').closest('.radio-card-group');
            if (group3) group3.style.border = '1px solid #ef4444';
            isValid = false;
        }
        if (!q4Checked) {
            const group4 = eligStep3.querySelector('input[name="q4"]').closest('.radio-card-group');
            if (group4) group4.style.border = '1px solid #ef4444';
            isValid = false;
        }
        return isValid;
    };

    // Clear validation borders on user input
    if (eligStep1) {
        const fields = eligStep1.querySelectorAll('input[required], select[required]');
        fields.forEach(field => {
            const clearBorder = () => {
                if (field.name === 'phone') {
                    field.parentElement.style.borderColor = '';
                } else {
                    field.style.borderColor = '';
                }
            };
            field.addEventListener('input', clearBorder);
            field.addEventListener('change', clearBorder);
        });
    }

    if (eligStep2) {
        eligStep2.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', () => {
                const group = radio.closest('.radio-card-group');
                if (group) group.style.border = '';
            });
        });
    }

    if (eligStep3) {
        eligStep3.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', () => {
                const group = radio.closest('.radio-card-group');
                if (group) group.style.border = '';
            });
        });
    }

    // Step navigation button event listeners
    const updateProgressDots = (step) => {
        const d1 = document.getElementById('elig-dot-1');
        const d2 = document.getElementById('elig-dot-2');
        const d3 = document.getElementById('elig-dot-3');
        const l1 = document.getElementById('elig-line-1');
        const l2 = document.getElementById('elig-line-2');
        if (d1 && d2 && d3 && l1 && l2) {
            if (step === 1) {
                d1.classList.add('active');
                d2.classList.remove('active');
                d3.classList.remove('active');
                l1.classList.remove('active');
                l2.classList.remove('active');
            } else if (step === 2) {
                d1.classList.add('active');
                d2.classList.add('active');
                d3.classList.remove('active');
                l1.classList.add('active');
                l2.classList.remove('active');
            } else if (step === 3) {
                d1.classList.add('active');
                d2.classList.add('active');
                d3.classList.add('active');
                l1.classList.add('active');
                l2.classList.add('active');
            }
        }
    };

    if (eligBtnContinue) {
        eligBtnContinue.addEventListener('click', () => {
            if (validateEligibilityStep1()) {
                if (eligStep1) eligStep1.style.display = 'none';
                if (eligStep2) eligStep2.style.display = 'block';
                if (eligStep3) eligStep3.style.display = 'none';
                if (eligStepText) eligStepText.innerText = 'Step 2 of 3';
                updateProgressDots(2);
            }
        });
    }

    if (eligBtnBack2) {
        eligBtnBack2.addEventListener('click', () => {
            if (eligStep1) eligStep1.style.display = 'block';
            if (eligStep2) eligStep2.style.display = 'none';
            if (eligStep3) eligStep3.style.display = 'none';
            if (eligStepText) eligStepText.innerText = 'Step 1 of 3';
            updateProgressDots(1);
        });
    }

    if (eligBtnContinue2) {
        eligBtnContinue2.addEventListener('click', () => {
            if (validateEligibilityStep2()) {
                if (eligStep1) eligStep1.style.display = 'none';
                if (eligStep2) eligStep2.style.display = 'none';
                if (eligStep3) eligStep3.style.display = 'block';
                if (eligStepText) eligStepText.innerText = 'Step 3 of 3';
                updateProgressDots(3);
            }
        });
    }

    if (eligBtnBack3) {
        eligBtnBack3.addEventListener('click', () => {
            if (eligStep1) eligStep1.style.display = 'none';
            if (eligStep2) eligStep2.style.display = 'block';
            if (eligStep3) eligStep3.style.display = 'none';
            if (eligStepText) eligStepText.innerText = 'Step 2 of 3';
            updateProgressDots(2);
        });
    }

    // Close modals on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeEligibilityModal();
            closePaymentModal();
        }
    });

    if (eligForm) {
        const inputs = eligForm.querySelectorAll('input, select');
        
        // Load saved data
        const savedData = JSON.parse(localStorage.getItem('vesti_eligibility_data') || '{}');
        inputs.forEach(input => {
            if (input.name && savedData[input.name]) {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    if (input.value === savedData[input.name]) input.checked = true;
                } else {
                    input.value = savedData[input.name];
                }
            }
            
            // Save data on change
            input.addEventListener('change', (e) => {
                const currentData = JSON.parse(localStorage.getItem('vesti_eligibility_data') || '{}');
                if (e.target.type === 'radio' || e.target.type === 'checkbox') {
                    if (e.target.checked) currentData[e.target.name] = e.target.value;
                } else {
                    currentData[e.target.name] = e.target.value;
                }
                localStorage.setItem('vesti_eligibility_data', JSON.stringify(currentData));
            });
        });

        // Submit eligibility form -> show details submitted success (no payment)
        eligForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate step 3 before allowing submission
            if (!validateEligibilityStep3()) {
                return;
            }
            
            // Gather user info
            const firstName = eligForm.querySelector('input[name="firstName"]').value || '';
            const lastName = eligForm.querySelector('input[name="lastName"]').value || '';
            const email = eligForm.querySelector('input[name="email"]').value || '';
            const phone = eligForm.querySelector('input[name="phone"]').value || '';
            const country = eligForm.querySelector('select[name="country"]').value || '';

            // Save user to session
            const user = {
                firstName: firstName,
                lastName: lastName,
                name: firstName + ' ' + lastName,
                email: email,
                phone: phone,
                country: country,
                timestamp: new Date().toLocaleString(),
                watched: {
                    tourist: false,
                    business: false,
                    family: false,
                    group: false
                }
            };
            localStorage.setItem('vesti_current_user', JSON.stringify(user));

            // Sync with registered users array for admin
            let usersList = JSON.parse(localStorage.getItem('vesti_registered_users') || '[]');
            const existingIdx = usersList.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
            if (existingIdx >= 0) {
                user.watched = usersList[existingIdx].watched || user.watched;
                usersList[existingIdx] = user;
            } else {
                usersList.push(user);
            }
            localStorage.setItem('vesti_registered_users', JSON.stringify(usersList));

            // Trigger hero welcome badge update immediately
            if (typeof checkHeroUserWelcome === 'function') {
                checkHeroUserWelcome();
            }

            // Close the eligibility modal
            window.closeEligibilityModal();

            // Show a "Details Submitted" success modal
            const successOverlay = document.createElement('div');
            successOverlay.id = 'details-submitted-overlay';
            successOverlay.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(6,14,66,0.85);display:flex;align-items:center;justify-content:center;animation:fadeIn 0.3s ease;';
            successOverlay.innerHTML = `
                <div style="background:#fff;border-radius:24px;padding:48px 40px;max-width:420px;width:90%;text-align:center;box-shadow:0 25px 60px rgba(0,0,0,0.3);animation:scaleUp 0.35s ease;">
                    <div style="width:72px;height:72px;border-radius:50%;background:rgba(98,148,59,0.12);border:2.5px solid #00a544;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
                        <svg width="36" height="36" fill="none" stroke="#00a544" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h2 style="font-family:'Outfit',sans-serif;font-size:24px;font-weight:700;color:#13110f;margin:0 0 10px;">Details Submitted Successfully!</h2>
                    <p style="font-size:15px;color:#64748b;line-height:1.6;margin:0 0 8px;">Thank you, <strong>${firstName}</strong>. Your eligibility details have been received.</p>
                    <p style="font-size:14px;color:#64748b;line-height:1.6;margin:0 0 24px;">Our team will review your profile and reach out to <strong>${email || 'your email'}</strong> within 24 hours with next steps.</p>
                    <button onclick="this.closest('#details-submitted-overlay').remove();" style="background:#00a544;color:#fff;border:none;padding:14px 40px;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer;transition:background 0.2s;font-family:'Outfit',sans-serif;" onmouseover="this.style.background='#4e8236'" onmouseout="this.style.background='#00a544'">Done</button>
                </div>
            `;
            document.body.appendChild(successOverlay);
            successOverlay.addEventListener('click', (ev) => {
                if (ev.target === successOverlay) successOverlay.remove();
            });
        });
    }

    // Analytics Tracking Mock
    const trackConversion = (eventName, buttonName) => {
        console.log(`[Analytics] Event: ${eventName} | Button: ${buttonName} | Timestamp: ${new Date().toISOString()}`);
    };

    // Attach tracking to CTA buttons
    const ctaButtons = document.querySelectorAll('a[href^="https://wevesti.com/clarity-session"], button[onclick*="eligibility-modal"]');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            trackConversion('cta_click', btn.innerText.trim() || 'CTA Button');
        });
    });

    // FAQ Accordion Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        const icon = item.querySelector('.faq-icon');
        
        if (trigger) {
            trigger.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other active items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        if (otherIcon) {
                            otherIcon.innerHTML = '&plus;';
                        }
                    }
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    if (icon) {
                        icon.innerHTML = '&minus;';
                    }
                } else {
                    item.classList.remove('active');
                    if (icon) {
                        icon.innerHTML = '&plus;';
                    }
                }
            });
        }
    });

    // 14. Premium Scroll Stacking Cards Animation Engine
    const scrollSection = document.getElementById('scroll-stacking');
    const scrollCards = document.querySelectorAll('.scroll-card-wrapper');
    if (scrollSection && scrollCards.length > 0) {
        const handleScrollStacking = () => {
            const isMobile = window.matchMedia('(max-width: 992px)').matches;
            scrollCards.forEach((card, idx) => {
                const cardInner = card.querySelector('.scroll-card');
                if (!cardInner) return;
                
                if (isMobile) {
                    cardInner.style.transform = '';
                    cardInner.style.filter = '';
                    cardInner.style.transformOrigin = '';
                    return;
                }

                let totalProgress = 0;
                const cardRect = card.getBoundingClientRect();
                const cardHeight = cardRect.height;
                const cardBottom = cardRect.top + cardHeight;

                for (let j = idx + 1; j < scrollCards.length; j++) {
                    const nextCard = scrollCards[j];
                    const nextRect = nextCard.getBoundingClientRect();
                    const nextStickyTop = parseInt(window.getComputedStyle(nextCard).top, 10) || (80 + j * 90);
                    
                    const startY = cardBottom;
                    const endY = nextStickyTop;
                    
                    let progress = 0;
                    if (nextRect.top < startY) {
                        progress = (startY - nextRect.top) / (startY - endY);
                        progress = Math.max(0, Math.min(1, progress));
                    }
                    totalProgress += progress;
                }

                // Apply stacking scaling, dimming, and depth Y-shift
                const scale = 1.0 - (totalProgress * 0.04);       // Scale down by 4% per overlap
                const brightness = 1.0 - (totalProgress * 0.12);  // Dim brightness by 12% per overlap
                const translateY = totalProgress * -15;           // Shift up by 15px per overlap to create tuck-under depth

                cardInner.style.transform = `scale(${scale}) translateY(${translateY}px)`;
                cardInner.style.filter = `brightness(${brightness})`;
                cardInner.style.transformOrigin = 'center top';
            });
        };

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScrollStacking();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
        window.addEventListener('resize', handleScrollStacking);
        
        // Trigger initial calculation
        handleScrollStacking();
    }
});



