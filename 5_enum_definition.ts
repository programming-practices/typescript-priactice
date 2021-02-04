enum Membership {
    Simple,
    Standard,
    Premium
}

const membership_1 = Membership.Simple;
const membership_2 = Membership.Standard;
const membership_3 = Membership.Premium;
console.log(membership_1);
console.log(membership_2);
console.log(membership_3);

const membershipReverse_1 = Membership[0];
const membershipReverse_2 = Membership[1];
const membershipReverse_3 = Membership[2];
console.log(membershipReverse_1);
console.log(membershipReverse_2);
console.log(membershipReverse_3);

enum SocialMedia {
    LINKEDIN = 'LinkedIn',
    TWITTER = 'Twitter',
}

const socialMedia_1 = SocialMedia.LINKEDIN;
const socialMedia_2 = SocialMedia.TWITTER;
console.log(socialMedia_1);
console.log(socialMedia_2);
