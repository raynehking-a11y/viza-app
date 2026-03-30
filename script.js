// ... (الأكواد العلوية ثابتة)

// دالة طلب السحب
window.requestWithdrawal = async () => {
    const user = auth.currentUser;
    const docSnap = await getDoc(doc(db, "users", user.uid));
    const points = docSnap.data().points;

    if (points >= 1000) {
        // إذا وصل 1000 نقطة، يفتح له تليجرام ليرسل لك هويته (UID) للمطالبة
        const message = `مرحباً صوفي، أريد سحب أرباحي. حسابي هو: ${user.email} والـ ID الخاص بي: ${user.uid}`;
        window.open(`https://t.me/sofi_hub?text=${encodeURIComponent(message)}`, "_blank");
    } else {
        const needed = 1000 - points;
        alert(`عذراً، رصيدك غير كافٍ. تحتاج إلى ${needed.toFixed(2)} نقطة إضافية للسحب.`);
    }
};

// ... (باقي الأكواد مالت الفيديو والـ 24 ساعة تبقى كما هي في الكود السابق)
