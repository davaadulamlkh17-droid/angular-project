package mn.icode;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import mn.icode.entity.Student;
import mn.icode.repository.StudentRepository;

@Component
public class DataInitializer implements CommandLineRunner{
    private final StudentRepository studentRepository;

    public DataInitializer(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public void run(String... args) {
        studentRepository.save(new Student("Bat", "bat@email.com", 20, "A"));
        studentRepository.save(new Student("Dulguun", "dulguun@email.com", 21, "B"));
        studentRepository.save(new Student("Sarnai", "sarnai@email.com", 19, "A"));
        studentRepository.save(new Student("Temuulen", "temuulen@email.com", 22, "C"));
        studentRepository.save(new Student("Oyun", "oyun@email.com", 20, "B"));

        System.out.println("✅ Sample data loaded: " + studentRepository.count() + " students");
    }
}
